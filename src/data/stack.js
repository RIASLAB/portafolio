// Stack tecnológico, herramientas de IA, estudios, certificaciones y experiencia del equipo.
import { FaBrain, FaMagic, FaKeyboard } from 'react-icons/fa';

function logo(nombre) {
  return '/img/stack/' + nombre + '.svg';
}

// "usadoPor" indica qué integrante maneja cada tecnología.
export const stack = [
  { nombre: 'React', imagen: logo('react'), usadoPor: ['Jhon', 'Luis'], descripcion: 'Interfaces con componentes, hooks y Context API.' },
  { nombre: 'JavaScript', imagen: logo('javascript'), usadoPor: ['Jhon', 'Luis'], descripcion: 'Lógica del cliente, eventos y Promesas.' },
  { nombre: 'Python', imagen: logo('python'), usadoPor: ['Jhon', 'Luis'], descripcion: 'Apps de escritorio con Tkinter y automatización.' },
  { nombre: 'Java', imagen: logo('java'), usadoPor: ['Luis'], descripcion: 'Programación orientada a objetos y arquitectura MVC.' },
  { nombre: 'SQL Server', imagen: logo('microsoftsqlserver'), usadoPor: ['Jhon'], descripcion: 'Consultas, permisos y replicación a puntos de venta.' },
  { nombre: 'MySQL', imagen: logo('mysql'), usadoPor: ['Jhon', 'Luis'], descripcion: 'Bases de datos de aplicaciones web.' },
  { nombre: 'Node.js', imagen: logo('nodejs'), usadoPor: ['Jhon'], descripcion: 'Backend del CMMS de mantenimiento.' },
  { nombre: 'Laravel', imagen: logo('laravel'), usadoPor: ['Jhon', 'Luis'], descripcion: 'Framework PHP del trabajo de grado LugoVet.' },
  { nombre: 'Linux', imagen: logo('linux'), usadoPor: ['Luis'], descripcion: 'Administración de servidores (Linux y Ubuntu).' },
  { nombre: 'Git', imagen: logo('git'), usadoPor: ['Jhon', 'Luis'], descripcion: 'Control de versiones y trabajo en equipo en GitHub.' },
];

// Otras herramientas de infraestructura y soporte, por integrante.
export const herramientas = [
  {
    integrante: 'Jhon',
    lista: ['Odoo', 'SAP Business One / HANA', 'Sophos Firewall', 'MikroTik', 'UniFi', 'Acronis RMM', 'GLPI', 'OCS Inventory'],
  },
  {
    integrante: 'Luis',
    lista: ['pfSense', 'Squid', 'pfBlockerNG', 'Cisco Packet Tracer', 'TCP/IP · VLAN · DHCP · DNS', 'Aranda', 'SAP', 'Office 365'],
  },
];

export const herramientasIA = [
  { nombre: 'Claude', icono: FaBrain, uso: 'Asistente de programación: generación y revisión de código, depuración y documentación.' },
  { nombre: 'Google Gemini', icono: FaMagic, uso: 'Modelo conectado por API al chat de este portafolio.' },
  { nombre: 'GitHub Copilot', icono: FaKeyboard, uso: 'Autocompletado de código dentro del editor.' }, // TODO: dejar solo las que usen
];

export const estudios = [
  {
    integrante: 'Jhon',
    titulo: 'Tecnología en Sistemas de Información',
    institucion: 'Institución Universitaria Antonio José Camacho',
    periodo: 'Ago. 2023 – Actualidad',
  },
  {
    integrante: 'Luis',
    titulo: 'Tecnología en Sistemas e Información',
    institucion: 'Institución Universitaria Antonio José Camacho',
    periodo: 'Ago. 2023 – Actualidad',
  },
];

export const certificaciones = [
  { integrante: 'Luis', titulo: 'Marketing digital', entidad: '', anio: '' }, // TODO: entidad y año
];

// Experiencia laboral y académica (timeline), con el integrante de cada una.
export const experiencias = [
  {
    integrante: 'Luis',
    periodo: '2026',
    cargo: 'Líder de Infraestructura y Soporte',
    empresa: 'SIO SAS',
    descripcion: 'Soporte técnico e infraestructura; configuración y administración de redes; implementación de pfSense; diagnóstico de incidentes y servicios de conectividad.',
  },
  {
    integrante: 'Jhon',
    periodo: 'Mar. 2025 – Nov. 2026',
    cargo: 'Analista',
    empresa: 'NUTRICÁRNICOS / INDUCARNES · Grupo NUTRIALIMENTOS',
    descripcion:
      'Implementación del ERP Odoo y desarrollo de un CMMS de mantenimiento en Node.js y React. Herramientas internas en Python y SQL Server, reportes desde SAP HANA y soporte de infraestructura TI (Sophos, MikroTik, UniFi, Acronis RMM, GLPI).',
  },
  {
    integrante: 'Luis',
    periodo: 'Mar. 2025 – Mar. 2026',
    cargo: 'Practicante de Soporte Técnico TI',
    empresa: 'Incauca',
    descripcion: 'Soporte a usuarios; mantenimiento y actualización de equipos; gestión de incidentes en Aranda; configuración de impresoras, Office 365, SAP y servicios de red.',
  },
  {
    integrante: 'Ambos',
    periodo: 'Nov. 2026',
    cargo: 'Auditoría interna de sistemas (proyecto académico)',
    empresa: 'IPS Clínica Salud Florida',
    descripcion: 'Auditoría interna apoyada en la aplicación AuditHCE.', // TODO: una línea de qué hicieron
  },
];
