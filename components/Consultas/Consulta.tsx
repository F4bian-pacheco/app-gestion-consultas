import React, { useState } from 'react'
import styled from 'styled-components'
import { ConsultaI } from '../../libs/services'

import {
  AiFillCaretDown,
  AiFillCaretUp
} from 'react-icons/ai'

interface ConsultaContainerProps {
  open: boolean
}

const ConsultaContainer = styled.div<ConsultaContainerProps>`
  width: 100%;
  height: ${({ open }) => open ? 'auto' : '70px'};
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: ${({ open }) => open ? 'flex-start' : 'center'}; */
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  /* transition: all 0.3s ease-in-out; */
`

const BotonDropdown = styled.button`
  width: 6rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #d1d1d1;
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  place-items: center;
`

const ConsultaHeader = styled.div`
  width: 100%;
  height: 54px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`
const ConsultaBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
`

const ConsultaInfoContainer = styled.div`
  width: 100%;
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

function Consultainfo({ titulo, data }: { titulo: string, data: string | ConsultaDataI }) {
  return (
    <ConsultaInfoContainer>
      <h4>{titulo}: </h4>
      {typeof data === 'object' ? (
        <p>{data.nombre} {data.apellido}</p>
      ) : (
        <p>{data}</p>
      )}
    </ConsultaInfoContainer>
  )
}



function Consulta({ consulta }: { consulta: ConsultaI }) {

  const buton_icons = {
    "v": <AiFillCaretDown size={18} />,
    "x": <AiFillCaretUp size={18} />
  }

  const [open, setOpen] = useState(false)
  const [buttonIcon, setbuttonIcon] = useState('v')

  const toggleOpen = () => {
    setOpen(!open)
    setbuttonIcon(open ? 'v' : 'x')
  }

  return (
    <ConsultaContainer open={open}>
      <ConsultaHeader onClick={toggleOpen}>
        <Consultainfo titulo='Asunto' data={consulta.asunto} />
        <Consultainfo titulo='Categoria' data={consulta.tipo_consulta} />
        {/* <BotonDropdown onClick={toggleOpen}>{buton_icons[buttonIcon]}</BotonDropdown> */}
      </ConsultaHeader>
      {open && (
        <ConsultaBody>
          <Consultainfo titulo='Usuario' data={{ nombre: consulta.usuario?.nombre, apellido: consulta.usuario?.apellido }} />
          <Consultainfo titulo='Categoria' data={consulta.tipo_consulta} />
          <Consultainfo titulo='Descripcion' data={consulta.descripcion} />
          <button>Responder</button>
        </ConsultaBody>
      )}
    </ConsultaContainer>
  )
}

export default Consulta