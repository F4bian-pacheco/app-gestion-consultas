import React from 'react'
import Consulta from './Consulta'
import { consultas } from '../../libs/services'
import styled from 'styled-components'
import { AiOutlineFilter, AiFillFilter } from 'react-icons/ai'

const ConsultasContainer = styled.div`
  width: 80%;
  height: 100%;
  /* background-color: #681717; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  gap: 1rem;
  overflow-y: hidden;
`

const FilterButton = styled.button`
  width: 100px;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondaryHover};
  border: none;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
    color: ${({ theme }) => theme.colors.background};
  }
`

function ConsultaTab() {
  const [openFilter, setOpenFilter] = React.useState<boolean>(false)
  return (
    <ConsultasContainer>
      <FilterButton><AiOutlineFilter /> Filtrar</FilterButton>
      {consultas.map((consulta) => (
        <Consulta key={consulta.id} consulta={consulta} />
      ))}
    </ConsultasContainer>
  )
}

export default ConsultaTab