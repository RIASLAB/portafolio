import { useContext, useState } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { CATEGORIAS } from '../data/projects';
import { PROYECTOS_POR_PAGINA } from '../config';
import { FILTROS_INICIALES, filtrarProyectos, hayFiltros, paginar, totalPaginas } from '../utils/funciones';
import PageTitle from '../components/PageTitle';
import ProjectFilters from '../components/ProjectFilters';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';

// Vista de proyectos: filtros + lista paginada.
function Projects() {
  const { projects, loading, error } = useContext(PortfolioContext);
  const [filtros, setFiltros] = useState(FILTROS_INICIALES);
  const [pagina, setPagina] = useState(1);

  // 1. Filtrar → 2. Paginar (10 por página).
  const filtrados = filtrarProyectos(projects, filtros);
  const total = totalPaginas(filtrados.length, PROYECTOS_POR_PAGINA);
  const visibles = paginar(filtrados, pagina, PROYECTOS_POR_PAGINA);

  function handleFiltrar(nuevosFiltros) {
    setFiltros(nuevosFiltros);
    setPagina(1); // al filtrar se vuelve a la página 1
  }

  function handleLimpiar() {
    handleFiltrar(FILTROS_INICIALES);
  }

  function handleCambiarPagina(numero) {
    setPagina(numero);
    window.scrollTo(0, 0);
  }

  return (
    <section className="section container">
      <PageTitle
        eyebrow="Portafolio"
        title="Proyectos"
        subtitle="Soluciones de escritorio, web, datos, IA y ciberseguridad."
      />

      <ProjectFilters categorias={CATEGORIAS} onFilter={handleFiltrar} onClear={handleLimpiar} />

      {/* Renderizado condicional según el estado de la carga */}
      {loading && <p className="empty-state">Cargando proyectos…</p>}

      {error && <p className="alert alert--error">{error}</p>}

      {!loading && !error && (
        <>
          <p className="muted small projects__count">
            Mostrando {visibles.length} de {filtrados.length} proyectos
            {hayFiltros(filtros) && ' (filtrados)'} · Página {pagina} de {total}
          </p>

          {visibles.length === 0 ? (
            <div className="card empty-state">
              <p>No hay proyectos que coincidan con los filtros.</p>
              <button type="button" className="btn btn--ghost" onClick={handleLimpiar}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid--3">
              {visibles.map((proyecto) => (
                <ProjectCard key={proyecto.id} project={proyecto} />
              ))}
            </div>
          )}

          <Pagination page={pagina} totalPages={total} onChange={handleCambiarPagina} />
        </>
      )}
    </section>
  );
}

export default Projects;
