// ─────────────────────────────────────────────────────────────
// Funciones de JavaScript que usan varias vistas:
// utilidades de texto.
// ─────────────────────────────────────────────────────────────

// Quita tildes y pasa a minúsculas para comparar sin importar acentos.
// "Creación" → "creacion"
export function normalizar(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
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
