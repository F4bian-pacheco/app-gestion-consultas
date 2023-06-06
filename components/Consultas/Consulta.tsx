import React from 'react'
import styled from 'styled-components'
import { ConsultaI } from '../../libs/services'

const ConsultaContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

function Consulta({ consulta }: { consulta: ConsultaI }) {
  return (
    <ConsultaContainer>
      {consulta.id} - {consulta.asunto}
    </ConsultaContainer>
  )
}

export default Consulta