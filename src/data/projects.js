// ─────────────────────────────────────────────────────────────
// Catálogos de la vista de proyectos.
//
// Los proyectos están en public/data/projects.json y se cargan con fetch
// (ver services/projectService.js). Cada proyecto tiene 8 atributos:
//   id, titulo, categoria, tecnologia, anio, estado, descripcion, enlace
// + autor: "Jhon", "Luis" o "Ambos"
//
// Todos los proyectos del JSON son reales (del equipo o de cada integrante).
// ─────────────────────────────────────────────────────────────

export const CATEGORIAS = ['Escritorio', 'Web', 'Datos y reportes', 'IA', 'Ciberseguridad'];

// Portada según la categoría (imágenes en public/img/proyectos).
const PORTADAS = {
  Escritorio: 'escritorio',
  Web: 'web',
  'Datos y reportes': 'datos',
  IA: 'ia',
  Ciberseguridad: 'ciberseguridad',
};

export function obtenerPortada(categoria) {
  const archivo = PORTADAS[categoria] || 'web';
  return '/img/proyectos/' + archivo + '.svg';
}
