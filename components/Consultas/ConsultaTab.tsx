import React from 'react'
import Consulta from './Consulta'
import { consultas } from '../../libs/services'
import styled from 'styled-components'

const ConsultasContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #681717; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`

function ConsultaTab() {
  return (
    <ConsultasContainer>
      <button>Filtrar</button>
      {consultas.map((consulta) => (
        <Consulta key={consulta.id} consulta={consulta} />
      ))}
    </ConsultasContainer>
  )
}

export default ConsultaTab