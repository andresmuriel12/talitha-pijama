/**
 * 📢 INSTRUCCIONES PARA ACTUALIZAR EL CATÁLOGO (NO PROGRAMADORES)
 * -------------------------------------------------------------
 * 1. Para agregar un producto nuevo, COPIA el bloque "PLANTILLA" a continuación.
 * 2. PÉGALO debajo del último producto de la lista (antes del corchete final ] ).
 * 3. Cambia los textos entre comillas por tu información.
 * 4. Recuerda subir las fotos a la RAÍZ (el mismo lugar que el index.html).
 * 
 * --- COPIA DESDE AQUÍ ---
    {
        id: 10, // Cambia este número por el siguiente
        codigo: "TL-010", // Código de referencia (muy importante)
        nombre: "NOMBRE DE LA PIJAMA",
        descripcion: "Descripción elegante del producto.",
        precio: "000.000",
        imagen: "nombre-foto-1.png",
        imagenes: [
            "nombre-foto-1.png",
            "nombre-foto-2.png"
        ],
        categorias: ["mujer"], // Opciones: mujer, hombre, nina, sale
        tallas: ["S", "M", "L", "XL"], // Tallas disponibles
        esMasVendido: false
    },
 */
 const PRODUCTOS = [
    {
        id: 1,
        codigo: "TL-001",
        nombre: "Luna de Seda Crimson",
        descripcion: "Seda mora 100% natural de textura ultra-suave. Un toque imperceptible sobre la piel para un descanso profundo y reparador con un brillo sofisticado.",
        precio: "245.000",
        precioAnterior: "320.000",
        oferta: true,
        porcentajeDescuento: "-25%",
        imagen: "pijama-1.png",
        imagenes: ["pijama-1.png", "pijama-1.png"],
        categorias: ["mujer", "premium", "sale"],
        tallas: ["S", "M", "L"],
        material: "Seda Mora 100%",
        esMasVendido: true
    },
    {
        id: 2,
        codigo: "TL-002",
        nombre: "Aura Nude Silk Robe",
        descripcion: "Bata de seda fluida con detalles en encaje francés artesanal. La pieza definitiva para tus mañanas de calma y elegancia atemporal.",
        precio: "189.000",
        imagen: "pijama-2.png",
        imagenes: ["pijama-2.png", "pijama-2.png"],
        categorias: ["mujer", "premium"],
        tallas: ["U"],
        material: "Seda y Encaje Francés",
        esMasVendido: false
    },
    {
        id: 3,
        codigo: "TL-003",
        nombre: "Petite Brise Signature",
        descripcion: "Algodón pima peruano de fibra larga, teñido con tintes orgánicos. Confort puro y transpirable para las pieles más delicadas.",
        precio: "95.000",
        imagen: "pijama-3.png",
        imagenes: ["pijama-3.png", "pijama-3.png"],
        categorias: ["nina"],
        tallas: ["2", "4", "6", "8"],
        material: "Algodón Pima Peruano",
        esMasVendido: false
    },
    {
        id: 4,
        codigo: "TL-004",
        nombre: "Midnight Tailor Lino",
        descripcion: "Conjunto masculino en lino belga pre-lavado. Estructura relajada con un corte impecable para el hombre que valora el detalle.",
        precio: "210.000",
        imagen: "pijama-4.png",
        imagenes: ["pijama-4.png", "pijama-4.png"],
        categorias: ["hombre", "premium"],
        tallas: ["M", "L", "XL"],
        material: "Lino Belga Premium",
        esMasVendido: true
    },
    {
        id: 5,
        codigo: "TL-005",
        nombre: "Céleste Satin Set Duo",
        descripcion: "Top de seda con tiras cruzadas y short d'orsay. Frescura minimalista y equilibrio perfecto entre comodidad y seducción.",
        precio: "145.000",
        imagen: "pijama-5.png",
        imagenes: ["pijama-5.png", "pijama-5.png"],
        categorias: ["mujer", "premium"],
        tallas: ["S", "M"],
        material: "Satén de Seda",
        esMasVendido: false
    },
    {
        id: 6,
        codigo: "TL-006",
        nombre: "Linen Shadow Essential",
        descripcion: "Pantalón y polo en lino lavado de alta densidad. Transpirabilidad total en una silueta contemporánea y versátil.",
        precio: "178.000",
        imagen: "pijama-6.png",
        imagenes: ["pijama-6.png", "pijama-6.png"],
        categorias: ["hombre"],
        tallas: ["S", "M", "L"],
        material: "Lino Orgánico",
        esMasVendido: false
    },
    {
        id: 10,
        codigo: "TL-010",
        nombre: "Ruby Silk Long Set",
        descripcion: "Pijama de seda roja en corte clásico largo. Elegancia vibrante que envuelve el cuerpo en una caricia de lujo.",
        precio: "40.000",
        imagen: "pijama-roja-1.png",
        imagenes: ["pijama-roja-1.png", "pijama-roja-2.png"],
        categorias: ["mujer", "sale"],
        tallas: ["S", "M"],
        material: "Seda Mora",
        esMasVendido: false
    },
    {
        id: 9,
        codigo: "003-T40",
        nombre: "Imperial Violet Silk",
        descripcion: "Pijama morada de seda con terminaciones en satén. Un color real para noches de descanso majestuoso.",
        precio: "40.000",
        precioAnterior: "60.000",
        oferta: true,
        porcentajeDescuento: "-20%",
        imagen: "pijama-8.png",
        imagenes: ["pijama-8.png", "pijama-7.png"],
        categorias: ["mujer", "premium", "sale"],
        tallas: ["S", "M", "L"],
        material: "Seda Mora Premium",
        esMasVendido: false
    },
    {
        id: 11,
        codigo: "003-T50",
        nombre: "Blush Rose Satin",
        descripcion: "Sutil tono rosado en seda de alto gramaje. La combinación ideal de feminidad y confort absoluto.",
        precio: "40.000",
        oferta: false,
        imagen: "pijama-9.png",
        imagenes: ["pijama-9.png", "pijama-10.png"],
        categorias: ["mujer", "premium"],
        tallas: ["S", "M", "L"],
        material: "Satén de Seda Mora",
        esMasVendido: false
    },
    {
        id: 12,
        codigo: "003-T60",
        nombre: "Midnight Onyx Silk",
        descripcion: "Negro profundo en seda mora con brillo natural. El básico de lujo que nunca debe faltar en tu colección.",
        precio: "40.000",
        oferta: false,
        imagen: "pijama-11.png",
        imagenes: ["pijama-11.png", "pijama-12.png"],
        categorias: ["mujer", "premium"],
        tallas: ["S", "M", "L"],
        material: "Seda Mora Premium",
        esMasVendido: false
    }
];

// exportar para que index.html pueda leerlo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTOS;
}
