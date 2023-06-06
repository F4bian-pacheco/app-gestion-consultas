import React from 'react'
import Breadcrumbs from '../BreadCrumb'
import {
  ConsultaDashboardContainer
} from '../styled/Consulta.styled'
import Tabs from '../Tabs'



function ConsultasContainerComponent() {
  return (
    <ConsultaDashboardContainer>
      <Tabs />
    </ConsultaDashboardContainer>
  )
}

export default ConsultasContainerComponent