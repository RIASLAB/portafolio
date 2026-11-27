import { LIMITES_FORMULARIO } from '../config';

// ─────────────────────────────────────────────────────────────
// Validaciones del formulario de contacto.
// Son funciones de JavaScript puro: reciben datos y devuelven un resultado.
// ─────────────────────────────────────────────────────────────

const SOLO_LETRAS = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]*$/;
const SOLO_NUMEROS = /^\d*$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Indica si un valor se puede escribir en un campo.
// Se usa en onChange para bloquear caracteres no permitidos mientras se escribe.
export function esEntradaPermitida(campo, valor) {
  switch (campo) {
    case 'nombre':
    case 'apellidos':
      return SOLO_LETRAS.test(valor) && valor.length <= LIMITES_FORMULARIO.maxNombre;
    case 'telefono':
      return SOLO_NUMEROS.test(valor) && valor.length <= LIMITES_FORMULARIO.maxTelefono;
    case 'descripcion':
      return valor.length <= LIMITES_FORMULARIO.maxDescripcion;
    default:
      return true;
  }
}

function validarNombre(valor, etiqueta) {
  if (valor.trim() === '') return etiqueta + ' es obligatorio.';
  if (!SOLO_LETRAS.test(valor)) return 'Solo se permiten letras.';
  if (valor.length > LIMITES_FORMULARIO.maxNombre) return 'Máximo ' + LIMITES_FORMULARIO.maxNombre + ' caracteres.';
  return null;
}

// Valida todo el formulario y devuelve un objeto con los errores por campo.
// Si el objeto queda vacío, el formulario es válido.
export function validarContacto(form) {
  const errores = {};

  const errorNombre = validarNombre(form.nombre, 'El nombre');
  if (errorNombre) errores.nombre = errorNombre;

  const errorApellidos = validarNombre(form.apellidos, 'El apellido');
  if (errorApellidos) errores.apellidos = errorApellidos;

  if (form.correo.trim() === '') {
    errores.correo = 'El correo es obligatorio.';
  } else if (!EMAIL.test(form.correo.trim())) {
    errores.correo = 'Ingresa un correo válido.';
  }

  if (form.telefono.trim() === '') {
    errores.telefono = 'El teléfono es obligatorio.';
  } else if (!SOLO_NUMEROS.test(form.telefono)) {
    errores.telefono = 'Solo se permiten números.';
  } else if (form.telefono.length < LIMITES_FORMULARIO.minTelefono) {
    errores.telefono = 'Mínimo ' + LIMITES_FORMULARIO.minTelefono + ' dígitos.';
  }

  if (form.descripcion.trim() === '') {
    errores.descripcion = 'Cuéntanos sobre tu proyecto.';
  }

  return errores;
}

export function esValido(errores) {
  return Object.keys(errores).length === 0;
}
