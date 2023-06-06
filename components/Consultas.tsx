import React from 'react'
import Breadcrumbs from './BreadCrumb'
import {
  ConsultaDashboardContainer,
  ConsultaContainer
} from './styled/Consulta.styled'
import Tabs from './Tabs'



function ConsultasContainerComponent() {
  return (
    <ConsultaDashboardContainer>
      <Tabs />
      {/* <ConsultaContainer>

      </ConsultaContainer> */}
    </ConsultaDashboardContainer>
  )
}

export default ConsultasContainerComponent