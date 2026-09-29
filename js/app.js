const $ = s => document.querySelector(s);
const wa = t => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
const precio = p => (CONFIG.mostrarPrecios && p != null) ? `${CONFIG.moneda} ${Number(p).toFixed(2)}` : "";
let categoria = "Todas", texto = "";

function tarjeta(p) {
  const pr = precio(p.precio);
  return `<article class="card">
    <button class="card-img" data-id="${p.id}" aria-label="Ver detalles de ${p.nombre}">
      <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
    </button>
    <p class="cat">${p.categoria}</p>
    <h3>${p.nombre}</h3>
    ${pr ? `<p class="price">${pr}</p>` : ""}
    <div class="row">
      <button class="link" data-id="${p.id}">Ver detalles</button>
      <a class="btn wa sm" target="_blank" rel="noopener" href="${wa("Hola, quiero consultar por: " + p.nombre)}">Consultar</a>
    </div>
  </article>`;
}

function pintar() {
  const q = texto.trim().toLowerCase();
  const lista = PRODUCTOS.filter(p =>
    (categoria === "Todas" || p.categoria === categoria) &&
    (p.nombre + " " + p.descripcion).toLowerCase().includes(q));
  $("#grid").innerHTML = lista.map(tarjeta).join("");
  $("#count").textContent = lista.length
    ? `Mostrando ${lista.length} de ${PRODUCTOS.length} gorras`
    : "No encontramos gorras con esa búsqueda. Prueba con otra palabra o escríbenos por WhatsApp.";
}

function chips() {
  const cats = ["Todas", ...new Set(PRODUCTOS.map(p => p.categoria))];
  $("#chips").innerHTML = cats.map(c =>
    `<button class="chip" aria-pressed="${c === categoria}" data-cat="${c}">${c}</button>`).join("");
}

function abrir(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  const pr = precio(p.precio);
  $("#modal-body").innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <div>
      <p class="cat">${p.categoria}</p>
      <h3>${p.nombre}</h3>
      ${pr ? `<p class="price">${pr}</p>` : ""}
      <p>${p.descripcion}</p>
      ${p.detalles.length ? `<ul>${p.detalles.map(d => `<li>${d}</li>`).join("")}</ul>` : ""}
      <a class="btn wa" target="_blank" rel="noopener" href="${wa("Hola, quiero consultar el precio de: " + p.nombre)}">${pr ? "Pedir por WhatsApp" : "Consultar precio por WhatsApp"}</a>
    </div>`;
  $("#modal").showModal();
}

document.addEventListener("click", e => {
  const id = e.target.closest("[data-id]")?.dataset.id;
  if (id) return abrir(id);
  const c = e.target.closest("[data-cat]")?.dataset.cat;
  if (c) { categoria = c; chips(); pintar(); }
  if (e.target.closest(".close") || e.target === $("#modal")) $("#modal").close();
  if (e.target.closest("#nav a")) toggleMenu(false);
});
$("#q").addEventListener("input", e => { texto = e.target.value; pintar(); });

function toggleMenu(abierto) {
  $("#nav").classList.toggle("open", abierto);
  $(".burger").setAttribute("aria-expanded", abierto);
}
$(".burger").addEventListener("click", () => toggleMenu(!$("#nav").classList.contains("open")));

// Enlaces de contacto generados desde CONFIG
document.querySelectorAll("[data-wa]").forEach(a => a.href = wa(a.dataset.wa || "Hola, quisiera información sobre las gorras WinCaps."));
document.querySelectorAll("[data-mail]").forEach(a => { a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; });
document.querySelectorAll("[data-fb]").forEach(a => a.href = CONFIG.facebook);
$("#year").textContent = new Date().getFullYear();

chips(); pintar();
