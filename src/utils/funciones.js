// ─────────────────────────────────────────────────────────────
// Funciones de JavaScript que usan varias vistas:
// filtros, paginación y utilidades de texto.
// ─────────────────────────────────────────────────────────────

// Filtros vacíos (estado inicial y botón "Limpiar filtros").
export const FILTROS_INICIALES = { categoria: '', texto: '', autor: '' };

// Quita tildes y pasa a minúsculas para comparar sin importar acentos.
// "Creación" → "creacion"
export function normalizar(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

// Filtra proyectos por:
//   1. categoria → coincidencia exacta (selector)
//   2. texto     → busca en la tecnología o en el título (texto libre)
//   3. autor     → Jhon, Luis o Ambos (los de "Ambos" aparecen al filtrar por cualquiera)
export function filtrarProyectos(proyectos, filtros) {
  const busqueda = normalizar(filtros.texto);

  return proyectos.filter((proyecto) => {
    const coincideCategoria = filtros.categoria === '' || proyecto.categoria === filtros.categoria;
    const coincideTexto =
      busqueda === '' ||
      normalizar(proyecto.tecnologia).includes(busqueda) ||
      normalizar(proyecto.titulo).includes(busqueda);
    const coincideAutor =
      filtros.autor === '' || proyecto.autor === filtros.autor || proyecto.autor === 'Ambos';
    return coincideCategoria && coincideTexto && coincideAutor;
  });
}

// Indica si hay algún filtro aplicado.
export function hayFiltros(filtros) {
  return filtros.categoria !== '' || filtros.texto.trim() !== '' || filtros.autor !== '';
}

// Número de páginas (mínimo 1). Ej: 22 proyectos / 10 por página = 3 páginas.
export function totalPaginas(cantidad, porPagina) {
  return Math.max(1, Math.ceil(cantidad / porPagina));
}

// Elementos de una página (las páginas empiezan en 1).
// Página 2 con 10 por página → slice(10, 20).
export function paginar(items, pagina, porPagina) {
  const inicio = (pagina - 1) * porPagina;
  return items.slice(inicio, inicio + porPagina);
}

// "Jhon Edinson Riascos" → "JE"
export function iniciales(nombre) {
  return nombre
    .split(' ')
    .slice(0, 2)
    .map((palabra) => palabra[0].toUpperCase())
    .join('');
}

// "En desarrollo" → "en-desarrollo" (para clases CSS).
export function slug(texto) {
  return normalizar(texto).replace(/\s+/g, '-');
}
