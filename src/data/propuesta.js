// Contenido de la vista "Propuesta de valor" del equipo.
import { FaCogs, FaUserShield, FaRobot, FaNetworkWired, FaChartBar } from 'react-icons/fa';

export const slides = [
  {
    icono: FaCogs,
    titulo: 'Automatizamos procesos operativos',
    texto: 'Convertimos tareas manuales y repetitivas (precios, usuarios, reportes) en herramientas que se ejecutan en segundos.',
    fondo: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
  },
  {
    icono: FaNetworkWired,
    titulo: 'Infraestructura y redes confiables',
    texto: 'Configuramos redes, firewalls (pfSense, Sophos) y servicios TI para que las aplicaciones funcionen sin interrupciones.',
    fondo: 'linear-gradient(135deg, #0e7490, #22c55e)',
  },
  {
    icono: FaUserShield,
    titulo: 'Seguridad desde el diseño',
    texto: 'Permisos por rol, mínimo privilegio, filtrado de tráfico y conexiones cifradas como parte del trabajo, no como un añadido.',
    fondo: 'linear-gradient(135deg, #0f766e, #0891b2)',
  },
  {
    icono: FaRobot,
    titulo: 'IA que aporta valor',
    texto: 'Integramos modelos de lenguaje con prompts claros y consumo de tokens controlado para que sean útiles y económicos.',
    fondo: 'linear-gradient(135deg, #be185d, #ea580c)',
  },
  {
    icono: FaChartBar,
    titulo: 'Datos para decidir',
    texto: 'Reportes conectados a la fuente (SAP HANA, SQL Server, MySQL) para que la información llegue actualizada.',
    fondo: 'linear-gradient(135deg, #1d4ed8, #0ea5e9)',
  },
];

export const pasos = [
  { n: '01', titulo: 'Entender', texto: 'Escuchamos el problema real del negocio antes de escribir código o tocar la red.' },
  { n: '02', titulo: 'Prototipar', texto: 'Usamos IA para validar ideas rápido y mostrar avances tempranos.' },
  { n: '03', titulo: 'Construir', texto: 'Desarrollamos e implementamos con buenas prácticas, control de versiones y pruebas.' },
  { n: '04', titulo: 'Acompañar', texto: 'Documentamos, capacitamos y damos soporte mientras la solución se usa.' },
];

// Qué recibe el cliente al trabajar con nosotros.
export const entregables = [
  'Código en GitHub con historial de cambios',
  'Documentación de uso y de instalación',
  'Red, firewall y permisos configurados por rol',
  'Capacitación y soporte al equipo que usará la solución',
];
