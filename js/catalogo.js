const filtros = { tipo: new Set(), material: new Set(), color: new Set() };
let texto = "";

function opciones(campo) {
  return [...new Set(PRODUCTOS.map(p => p[campo]))].sort();
}

function pintarFiltros() {
  ["tipo", "material", "color"].forEach(campo => {
    const cont = $(`#f-${campo}`);
    cont.innerHTML = opciones(campo).map(v => {
      const activo = filtros[campo].has(v);
      return `<button class="chip" aria-pressed="${activo}" data-campo="${campo}" data-valor="${v}">${v}</button>`;
    }).join("");
  });
}

function coincide(p) {
  const q = texto.trim().toLowerCase();
  const enTexto = !q || (p.nombre + " " + p.descripcion).toLowerCase().includes(q);
  const enTipo = filtros.tipo.size === 0 || filtros.tipo.has(p.tipo);
  const enMaterial = filtros.material.size === 0 || filtros.material.has(p.material);
  const enColor = filtros.color.size === 0 || filtros.color.has(p.color);
  return enTexto && enTipo && enMaterial && enColor;
}

function pintarGrid() {
  const lista = PRODUCTOS.filter(coincide);
  $("#grid").innerHTML = lista.map(tarjeta).join("");
  $("#count").textContent = lista.length
    ? `Mostrando ${lista.length} de ${PRODUCTOS.length} gorras`
    : "No encontramos gorras con esos filtros. Prueba quitando alguno, o escríbenos por WhatsApp.";
}

document.addEventListener("click", e => {
  const btn = e.target.closest("[data-campo]");
  if (!btn) return;
  const { campo, valor } = btn.dataset;
  filtros[campo].has(valor) ? filtros[campo].delete(valor) : filtros[campo].add(valor);
  pintarFiltros();
  pintarGrid();
});

$("#limpiar").addEventListener("click", () => {
  filtros.tipo.clear(); filtros.material.clear(); filtros.color.clear();
  texto = ""; $("#q").value = "";
  pintarFiltros(); pintarGrid();
});

$("#q").addEventListener("input", e => { texto = e.target.value; pintarGrid(); });

pintarFiltros();
pintarGrid();
