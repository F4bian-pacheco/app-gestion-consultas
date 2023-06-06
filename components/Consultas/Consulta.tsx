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
  height: ${({ open }) => open ? '100px' : '60px'};
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
  width: 40px;
  height: 40px;
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
  height: 44px;
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

function Consulta({ consulta }: { consulta: ConsultaI }) {

  const buton_icons = {
    "v": <AiFillCaretDown />,
    "x": <AiFillCaretUp />
  }

  const [open, setOpen] = useState(false)
  const [buttonIcon, setbuttonIcon] = useState('v')

  const toggleOpen = () => {
    setOpen(!open)
    setbuttonIcon(open ? 'v' : 'x')
  }

  return (
    <ConsultaContainer open={open}>
      <ConsultaHeader>
        {consulta.id} - {consulta.asunto}
        <BotonDropdown onClick={toggleOpen}>{buton_icons[buttonIcon]}</BotonDropdown>
      </ConsultaHeader>
      {open && (
        <ConsultaBody>
          {consulta.descripcion}
        </ConsultaBody>
      )}
    </ConsultaContainer>
  )
}

export default Consulta