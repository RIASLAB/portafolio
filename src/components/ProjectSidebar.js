import { useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

// Sidebar "Ver detalle": muestra los 8 atributos del proyecto seleccionado.
// Se cierra con el botón X, haciendo clic afuera o con la tecla Escape.
//
// Props:
//   project → proyecto seleccionado (o null si no hay ninguno)
//   onClose → función para cerrar el sidebar
function ProjectSidebar(props) {
  const proyecto = props.project;
  const abierto = proyecto !== null;
  const onClose = props.onClose;

  // Al abrir: escuchar la tecla Escape y bloquear el scroll de la página de fondo.
  // Al cerrar (función de limpieza): quitar el evento y devolver el scroll.
  useEffect(() => {
    if (!abierto) return;

    function handleKeyDown(evento) {
      if (evento.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [abierto, onClose]);

  return (
    <>
      <div className={abierto ? 'overlay overlay--show' : 'overlay'} onClick={onClose} />

      <aside className={abierto ? 'sidebar sidebar--open' : 'sidebar'}>
        {abierto && (
          <>
            <button type="button" className="sidebar__close" onClick={onClose} aria-label="Cerrar">
              <FaTimes />
            </button>
            <img src={proyecto.imagen} alt={proyecto.titulo} className="sidebar__img" />
            <h2>{proyecto.titulo}</h2>

            <dl className="detail-list">
              <dt>ID</dt>
              <dd>#{proyecto.id}</dd>
              <dt>Categoría</dt>
              <dd>{proyecto.categoria}</dd>
              <dt>Tecnología</dt>
              <dd>{proyecto.tecnologia}</dd>
              <dt>Año</dt>
              <dd>{proyecto.anio}</dd>
              <dt>Estado</dt>
              <dd>{proyecto.estado}</dd>
              <dt>Autor</dt>
              <dd>{proyecto.autor === 'Ambos' ? 'Jhon y Luis' : proyecto.autor}</dd>
              <dt>Descripción</dt>
              <dd>{proyecto.descripcion}</dd>
            </dl>

            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="btn btn--block">
              Ver repositorio <FaExternalLinkAlt size={12} />
            </a>
          </>
        )}
      </aside>
    </>
  );
}

export default ProjectSidebar;
