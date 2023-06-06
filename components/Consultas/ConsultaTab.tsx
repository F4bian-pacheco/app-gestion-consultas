import React from 'react'
import Consulta from './Consulta'
import { consultas } from '../../libs/services'
import styled from 'styled-components'

const ConsultaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

function ConsultaTab() {
  return (
    <ConsultaContainer>
      {consultas.map((consulta) => (
        <Consulta key={consulta.id} consulta={consulta} />
      ))}
    </ConsultaContainer>
  )
}

export default ConsultaTab