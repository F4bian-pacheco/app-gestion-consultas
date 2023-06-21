import React, { useState } from 'react'
import styled from 'styled-components'
import { ConsultaI } from '../../libs/services'

interface ConsultaContainerProps {
  open: boolean
}

//TODO
//* animar el cambio de altura de cada consulta
//* crear el filtro y hacer una ventana modal para filtrar
//* darle funcionalidad al boton de responder
//* crear la pagina de responder por id usando dashboard/consultas/responder/:id
//* mostrar foto de perfil del usuario
//* transformar la info del usuario en un link a la pagina de ese usuario

const ConsultaContainer = styled.div<ConsultaContainerProps>`
/*? aca tengo que cambiar si hago un diseño responsivo */
  width: 100%;
  height: ${({ open }) => open ? 'auto' : '54px'};
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* transition: height 1s ease-in; */
`

const ConsultaInline = styled.div`
  /* width: 1053px; */
  width: 100%;
  height: 54px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.2rem;
  
  &:first-child {
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: rgba(60, 145, 230, 0.5);
    }
  }

`
const ConsultaBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 1rem;
`

interface ConsultaInfoContainerProps {
  width?: string
}

const ConsultaInfoContainer = styled.div<ConsultaInfoContainerProps>`
  /* width: ${({ width }) => width ? width : '100%'}; */
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

interface ConsultaDataI {
  nombre: string,
  apellido: string
}

const ConsultaData = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
`

const ConsultaDataHeader = styled(ConsultaData)`
  background-color: inherit;
`

const BotonResponder = styled.button`
  width: 100%;
  height: 54px;
  outline: none;
  align-self: center;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid #3C91E6;
  transition: all 0.3s;
  font-size: 1.5rem;

  &:hover {
    background-color: rgba(60, 145, 230, 0.5);
    border: none
  }
`

function ConsultaInfoBody({ titulo, data, width }: { titulo: string, data: string | ConsultaDataI, width?: string }) {
  return (
    <ConsultaInfoContainer width={width}>
      <h4>{titulo}: </h4>
      {typeof data === 'object' ? (
        // si es usuario crear un link a la pagina de ese usuario
        <ConsultaData>{data.nombre} {data.apellido}</ConsultaData>
      ) : (
        <ConsultaData>{data}</ConsultaData>
      )}
    </ConsultaInfoContainer>
  )
}

function ConsultaInfoHeader({ titulo, data, width }: { titulo: string, data: string, width?: string }) {
  return (
    <ConsultaInfoContainer width={width}>
      <h4>{titulo}: </h4>
      <ConsultaDataHeader>{data}</ConsultaDataHeader>
    </ConsultaInfoContainer>
  )
}


function Consulta({ consulta }: { consulta: ConsultaI }) {

  const [open, setOpen] = useState(false)
  const [responder, setResponder] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const toggleResponder = () => {
    setResponder(!responder)
  }

  const changeResponderPage = () => {
    //? acá tengo que cambiar de pagina a consultas/responder/:id
  }

  return (
    <ConsultaContainer open={open}>
      <ConsultaInline onClick={toggleOpen}>
        <ConsultaInfoHeader titulo='Asunto' data={consulta.asunto} width='380px' />
        <ConsultaInfoHeader titulo='Fecha' data={consulta.fecha_creacion} width='200px' />
      </ConsultaInline>
      {open && (
        <>
          <ConsultaInline>
            <ConsultaInfoBody titulo='Usuario' data={{ nombre: consulta.usuario?.nombre, apellido: consulta.usuario?.apellido }} />
            <ConsultaInfoBody titulo='Categoria' data={consulta.tipo_consulta} />
          </ConsultaInline>
          <ConsultaBlock>
            <ConsultaInfoBody titulo='Descripcion' data={consulta.descripcion} />
            <BotonResponder onClick={changeResponderPage}>Responder</BotonResponder>
          </ConsultaBlock></>

      )}
    </ConsultaContainer>
  )
}

export default Consulta