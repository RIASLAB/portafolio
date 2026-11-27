import { obtenerPortada } from '../data/projects';

// Ruta del archivo JSON con los proyectos (está en la carpeta public/).
// Funciona igual que una API: si mañana hay un backend, solo se cambia esta URL.
const URL_PROYECTOS = '/data/projects.json';

// Consulta los proyectos con fetch, igual que el ejercicio de Rick and Morty:
//   1. fetch() hace la petición y devuelve una Promesa.
//   2. response.json() convierte el texto JSON en un arreglo de objetos (otra Promesa).
//   3. A cada proyecto se le agrega su imagen de portada con map().
export async function fetchProjects() {
  const response = await fetch(URL_PROYECTOS);

  if (!response.ok) {
    throw new Error('No fue posible cargar los proyectos (error ' + response.status + ').');
  }

  const proyectos = await response.json();

  return proyectos.map(function (proyecto) {
    return { ...proyecto, imagen: obtenerPortada(proyecto.categoria) };
  });
}
