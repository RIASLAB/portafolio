// Lista de redes sociales con íconos de react-icons.
// Props:
//   redes    → arreglo de objetos { nombre, url, icono }
//   compacto → si es true, solo muestra el ícono (se usa en el footer)
function SocialLinks(props) {
  return (
    <ul className={props.compacto ? 'social social--compact' : 'social'}>
      {props.redes.map((red) => {
        // El ícono es un componente: se guarda en una variable con mayúscula para usarlo en JSX.
        const Icono = red.icono;
        return (
          <li key={red.nombre}>
            <a href={red.url} target="_blank" rel="noopener noreferrer" className="social__link" title={red.nombre}>
              <Icono size={20} />
              {!props.compacto && <span>{red.nombre}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
