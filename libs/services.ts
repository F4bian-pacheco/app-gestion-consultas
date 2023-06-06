
interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  password: string;
  telefono: string;
}

export interface ConsultaI {
  id: number;
  fecha_atencion: string | null;
  respondida: boolean;
  tipo_consulta: string;
  asunto: string;
  descripcion: string;
  usuario: Usuario;
  estado: string;
}

interface Item {
  id: number;
  nombre: string;
  descripcion: string;
}

interface TipoConsulta extends Item { }

interface EstadoConsulta extends Item { }

export const consultas: ConsultaI[] = [
  {
    id: 1,
    fecha_atencion: null,
    respondida: false,
    tipo_consulta: 'Academica',
    asunto: 'No aparezco en el ramo de programación',
    descripcion: 'Estaban revisando las notas y no aparezco en el ramo de programación, pero yo entregué todo a tiempo',
    usuario: {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'juanperez@alu.ucm.cl',
      rol: 'Estudiante',
      password: 'f1rsdfdgdfazx2adasfcae34',
      telefono: '+569 12345678'
    },
    estado: 'Pendiente'
  },
  {
    id: 2,
    fecha_atencion: '2023-05-29T00:00:00.000Z',
    respondida: true,
    tipo_consulta: 'Otro',
    asunto: 'No puedo entrar a la plataforma',
    descripcion: 'No puedo entrar a la plataforma, me sale un error',
    usuario: {
      id: 2,
      nombre: 'Pedro',
      apellido: 'Perez',
      email: 'Pedroperez@alu.ucm.cl',
      rol: 'Estudiante',
      password: 'f1rsdfdgdfazx2adasfcae34',
      telefono: '+569 12345786'
    },
    estado: 'Respondida'
  },
  {
    id: 3,
    fecha_atencion: "2023-06-03",
    respondida: true,
    tipo_consulta: "Académica",
    asunto: "Duda sobre el proyecto final",
    descripcion: "Tengo una duda sobre el enunciado del proyecto final de la materia de Bases de Datos.",
    usuario: {
      id: 3,
      nombre: "Juan",
      apellido: "Gómez",
      email: "juangomez@example.com",
      rol: "Estudiante",
      password: "secreto123",
      telefono: "1234567890"
    },
    estado: "Resuelta"
  },
  {
    id: 4,
    fecha_atencion: "2023-06-01",
    respondida: true,
    tipo_consulta: "Académica",
    asunto: "Consulta sobre programación",
    descripcion: "Necesito ayuda con un problema de programación en Java.",
    usuario: {
      id: 4,
      nombre: "Ana",
      apellido: "Rodríguez",
      email: "anarodriguez@example.com",
      rol: "Estudiante",
      password: "contraseña789",
      telefono: "5551234567"
    },
    estado: "Resuelta"
  }
];


interface IRespuestas {
  id: number,
  consulta: ConsultaI,
  respuesta: string,
  fecha: string,
  usuario: Usuario
}