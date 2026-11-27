// Título de cada vista.
// Props:
//   eyebrow  → texto pequeño encima del título (opcional)
//   title    → título principal
//   subtitle → descripción debajo del título (opcional)
function PageTitle(props) {
  return (
    <div className="page-title">
      {props.eyebrow && <span className="eyebrow">{props.eyebrow}</span>}
      <h1 className="page-title__text">{props.title}</h1>
      {props.subtitle && <p className="muted page-title__sub">{props.subtitle}</p>}
    </div>
  );
}

export default PageTitle;
