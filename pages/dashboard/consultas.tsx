import React from 'react'
import ContentDashboard from '../../components/hocs/ContentDashboard'
import ConsultasContainerComponent from '../../components/Consultas'



function consultasPage({ children }) {

  return (
    <ContentDashboard titulo={"consultas"}>
      <ConsultasContainerComponent />
    </ContentDashboard>
  )
}




export default consultasPage