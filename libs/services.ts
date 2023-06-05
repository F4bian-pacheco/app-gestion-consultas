
interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  password: string;
  telefono: string;
}

interface Consulta {
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

const consultas: Consulta[] = [
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
  }
];


interface IRespuestas {
  id: number,
  consulta: Consulta,
  respuesta: string,
  fecha: string,
  usuario: Usuario
}

export default {
  consultas
}
