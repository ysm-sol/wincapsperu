/* ============================================================
   WINCAPS – configuración y catálogo
   Para agregar una gorra: copia un bloque { ... } y cambia los datos.
   Para mostrar precios: pon mostrarPrecios: true y llena "precio".
   "tipo", "material" y "color" alimentan los filtros del catálogo.
   ============================================================ */
const CONFIG = {
  whatsapp: "51929840414",              // número con código de país, sin + ni espacios
  email: "wincapsperu@gmail.com",
  facebook: "#",                        // pega aquí el enlace de tu Facebook
  mostrarPrecios: false,                // cámbialo a true cuando quieras mostrar precios
  moneda: "S/"
};

const PRODUCTOS = [
  {
    id: "azul-logo-rasta",
    nombre: "Gorra WinCaps Azul – Edición “Logo Rasta” (Bordado 3D)",
    tipo: "Curva",
    material: "Algodón",
    color: "Azul",
    imagen: "img/azul-logo-rasta.jpg",
    precio: null,
    descripcion: "El azul eléctrico cobra vida con el imponente bordado “WINCAPS” y sus detalles estilizados en colores Rasta. Coronada con el lema Born to Win y el monograma “WC”, es la gorra definitiva para quienes lideran con el ejemplo y buscan un estilo urbano auténtico.",
    detalles: [
      "Modelo: gorra curva estructurada de 6 paneles (silueta clásica)",
      "Diseño frontal: texto central “WINCAPS” en bordado 3D celeste texturizado, barras decorativas Rasta (verde, amarillo, rojo) y monograma “WC” entrelazado",
      "Mensaje: “Born To Win” bordado en la parte superior en hilo blanco",
      "Color base: Azul Real (Royal Blue)",
      "Autenticidad: parche lateral tejido con diseño oficial WinCaps y etiquetas internas reforzadas",
      "Garantía: sticker holográfico “Genuine Product – Since 2025” en la visera",
      "Ajuste: broche posterior regulable (snapback)"
    ]
  },
  {
    id: "beige-varsity-w",
    nombre: "Gorra WinCaps Beige – Edición “Varsity W” (Bordado Multicolor)",
    tipo: "Curva",
    material: "Algodón",
    color: "Beige",
    imagen: "img/beige-varsity-w.jpg",
    precio: null,
    descripcion: "Color beige con una “W” estilo varsity en bordado multicolor.",
    detalles: []
  },
  {
    id: "black-usa-glory",
    nombre: "Gorra WinCaps Black – Edición “USA Glory” (Parche Bordado)",
    tipo: "Curva",
    material: "Algodón",
    color: "Negro",
    imagen: "img/black-usa-glory.jpg",
    precio: null,
    descripcion: "Esta gorra fusiona la elegancia del color negro con un parche central de alta definición que proyecta una mentalidad internacional.",
    detalles: []
  },
  {
    id: "red-retro-neon",
    nombre: "Gorra WinCaps Red – Edición “Retro Neon” (Parche Bordado)",
    tipo: "Curva",
    material: "Algodón",
    color: "Rojo",
    imagen: "img/red-retro-neon.jpg",
    precio: null,
    descripcion: "Diseñada para romper con lo tradicional, presenta un parche frontal exclusivo que combina el estilo retro con la modernidad del neón.",
    detalles: []
  },
  {
    id: "royal-blue-el-dinero",
    nombre: "Gorra WinCaps Royal Blue – Edición “El Dinero” (Bordado 3D)",
    tipo: "Curva",
    material: "Algodón",
    color: "Azul",
    imagen: "img/royal-blue-el-dinero.jpg",
    precio: null,
    descripcion: "Con un vibrante color Azul Real, este modelo lleva al frente una verdad innegable: “El dinero se vuelve a ganar. La vida, no se vuelve a vivir”.",
    detalles: []
  }
];
