import styled from 'styled-components'
import { motion } from 'framer-motion'


const ConsultaDashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f39300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`


const ConsultaContainer = styled.main`
  width: 95%;
  height: 100%;
  background-color: #181875;
`


export {
  ConsultaDashboardContainer,
  ConsultaContainer
}