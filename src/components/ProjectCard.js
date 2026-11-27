import { slug } from '../utils/funciones';

// Tarjeta de un proyecto. Muestra las 5 propiedades obligatorias:
// título, categoría, tecnología, año y estado (más la imagen de portada).
//
// Props:
//   project  → objeto con los datos del proyecto
//   onSelect → función que se llama al presionar "Ver detalle"
//   selected → true si es el proyecto abierto en el sidebar
function ProjectCard(props) {
  const proyecto = props.project;

  function handleVerDetalle() {
    props.onSelect(proyecto);
  }

  return (
    <article className={props.selected ? 'card project-card project-card--selected' : 'card project-card'}>
      <img src={proyecto.imagen} alt={proyecto.titulo} className="project-card__img" />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="chip">{proyecto.categoria}</span>
          <span className="muted">{proyecto.anio}</span>
        </div>
        <h3 className="project-card__title">{proyecto.titulo}</h3>
        <p className="project-card__tech">{proyecto.tecnologia}</p>
        <p className="project-card__author">Por: {proyecto.autor === 'Ambos' ? 'Jhon y Luis' : proyecto.autor}</p>
        <div className="project-card__footer">
          <span className={'status status--' + slug(proyecto.estado)}>{proyecto.estado}</span>
          <button type="button" className="btn btn--small" onClick={handleVerDetalle}>
            Ver detalle
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
