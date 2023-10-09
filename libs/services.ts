
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
  fecha_creacion: string;
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
    fecha_creacion: "2023-05-29:00:00:00.000Z",
    respondida: false,
    tipo_consulta: 'Academica',
    asunto: 'No aparezco en el ramo de programación',
    descripcion: 'Mientras se encontraban en plena revisión de las notas académicas, me di cuenta de que mi nombre no figuraba en la lista del ramo de programación. A pesar de que presenté todas las asignaciones dentro de los plazos establecidos, no parecía haber rastro alguno de mi participación en el curso. Esta situación me generó cierta preocupación, ya que esperaba recibir un reconocimiento por mis esfuerzos y dedicación en la entrega de los trabajos. Sin embargo, hasta el momento, no he recibido ninguna explicación o respuesta que aclare esta situación.',
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
    fecha_creacion: '2023-05-28T00:00:00.000Z',
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
    fecha_creacion: "2023-05-30:00:00:00.000Z",
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
    fecha_creacion: "2023-05-31:13:00:00.000Z",
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
  },
  {
    id: 5,
    fecha_atencion: "2023-06-01",
    fecha_creacion: "2023-05-31:13:00:00.000Z",
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