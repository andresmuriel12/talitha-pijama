// ============================================================
// TALITHA PIJAMAS — Service Worker v2.0
// Skill: talitha-performance
// Estrategia: Cache-First para assets, Network-First para HTML
// Soporta alto volumen: reduce carga al servidor ~80% en visitas recurrentes
// ============================================================

const CACHE_NAME = 'talitha-v3';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './productos.js',
  './logo.png',
  './pijama-1.png',
  './pijama-2.png',
  './pijama-3.png',
  './pijama-4.png',
  './pijama-5.png',
  './pijama-6.png',
  './pijama-7.png',
  './pijama-8.png',
  './pijama-9.png',
  './pijama-10.png',
  './pijama-11.png',
  './pijama-12.png',
  './pijama-roja-1.png',
  './pijama-roja-2.png',
];

// ── INSTALL: Pre-cachear todos los assets estáticos ──────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: Limpiar caches viejos ──────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: Estrategia inteligente por tipo de recurso ─────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar peticiones no GET y de otros dominios
  if (request.method !== 'GET') return;
  if (!url.origin.includes(self.location.origin) && !isStaticCDN(url.href)) return;

  // Videos: NO cachear (son muy pesados), pasar directo al network
  if (url.pathname.endsWith('.mp4') || url.pathname.endsWith('.webm')) {
    return; // Deja que el browser maneje los videos nativamente (range requests)
  }

  // HTML: Network-First (siempre intentar la versión más fresca)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstStrategy(request));
    return;
  }

  // Todo lo demás (imágenes, CSS, JS, fuentes): Cache-First
  event.respondWith(cacheFirstStrategy(request));
});

// ── Cache-First: Busca en cache, si no hay va a network y cachea ──
async function cacheFirstStrategy(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Si no hay red y no hay cache, devolver respuesta vacía
    return new Response('', { status: 503 });
  }
}

// ── Network-First: Intenta network, si falla usa cache ────────
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('<h1>Sin conexión</h1>', {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// ── Verificar si es un CDN de assets estáticos permitido ─────
function isStaticCDN(href) {
  return href.includes('fonts.googleapis.com') ||
         href.includes('fonts.gstatic.com') ||
         href.includes('cdn.tailwindcss.com');
}
