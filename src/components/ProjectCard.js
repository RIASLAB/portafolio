import { slug } from '../utils/funciones';

// Tarjeta de un proyecto. Muestra las 5 propiedades obligatorias:
// título, categoría, tecnología, año y estado (más la imagen de portada).
//
// Props:
//   project  → objeto con los datos del proyecto
function ProjectCard(props) {
  const proyecto = props.project;

  return (
    <article className="card project-card">
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
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
