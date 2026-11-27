import { useState } from 'react';
import { FaFilter, FaEraser } from 'react-icons/fa';
import { FILTROS_INICIALES } from '../utils/funciones';

// Filtros por 2 atributos de los proyectos:
//   1. Categoría           → selector
//   2. Tecnología o nombre → texto libre
//   3. Integrante          → selector (Jhon, Luis o todos)
//
// Lo que el usuario escribe se guarda en un estado local (useState) y solo
// se aplica al presionar "Filtrar" (o Enter, porque es un <form>).
//
// Props:
//   categorias → arreglo con las opciones del selector
//   onFilter   → función que recibe { categoria, texto }
//   onClear    → función para limpiar los filtros
function ProjectFilters(props) {
  const [form, setForm] = useState(FILTROS_INICIALES);

  // Un solo manejador para los dos campos, usando el atributo "name".
  function handleChange(evento) {
    const { name, value } = evento.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(evento) {
    evento.preventDefault(); // evita que el formulario recargue la página
    props.onFilter({ categoria: form.categoria, texto: form.texto.trim(), autor: form.autor });
  }

  function handleClear() {
    setForm(FILTROS_INICIALES);
    props.onClear();
  }

  return (
    <form className="filters card" onSubmit={handleSubmit}>
      <label className="field">
        <span>Categoría</span>
        <select name="categoria" className="input" value={form.categoria} onChange={handleChange}>
          <option value="">Todas</option>
          {props.categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Integrante</span>
        <select name="autor" className="input" value={form.autor} onChange={handleChange}>
          <option value="">Todos</option>
          <option value="Jhon">Jhon</option>
          <option value="Luis">Luis</option>
        </select>
      </label>

      <label className="field filters__grow">
        <span>Tecnología o nombre</span>
        <input
          type="text"
          name="texto"
          className="input"
          placeholder="Ej: React, Python, SAP…"
          value={form.texto}
          onChange={handleChange}
        />
      </label>

      <div className="filters__actions">
        <button type="submit" className="btn">
          <FaFilter size={12} /> Filtrar
        </button>
        <button type="button" className="btn btn--ghost" onClick={handleClear}>
          <FaEraser size={13} /> Limpiar filtros
        </button>
      </div>
    </form>
  );
}

export default ProjectFilters;
