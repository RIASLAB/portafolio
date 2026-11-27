import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Paginación numerada con botones Anterior y Siguiente.
// Props:
//   page       → página actual (empieza en 1)
//   totalPages → total de páginas
//   onChange   → función que recibe el número de la nueva página
function Pagination(props) {
  // Si todo cabe en una página, no se muestra (renderizado condicional).
  if (props.totalPages <= 1) return null;

  // Arreglo [1, 2, 3, ...] con los números de página.
  const paginas = [];
  for (let i = 1; i <= props.totalPages; i++) {
    paginas.push(i);
  }

  return (
    <nav className="pagination">
      <button
        type="button"
        className="btn btn--ghost btn--small"
        disabled={props.page === 1}
        onClick={() => props.onChange(props.page - 1)}
      >
        <FaChevronLeft size={11} /> Anterior
      </button>

      {paginas.map((numero) => (
        <button
          type="button"
          key={numero}
          className={numero === props.page ? 'pagination__num pagination__num--active' : 'pagination__num'}
          onClick={() => props.onChange(numero)}
        >
          {numero}
        </button>
      ))}

      <button
        type="button"
        className="btn btn--ghost btn--small"
        disabled={props.page === props.totalPages}
        onClick={() => props.onChange(props.page + 1)}
      >
        Siguiente <FaChevronRight size={11} />
      </button>
    </nav>
  );
}

export default Pagination;
