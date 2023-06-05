import React from 'react'
import Dashboard from '../../components/hocs/Dashboard'
import ContentDashboard from '../../components/hocs/ContentDashboard'

function reservasPage({ children }) {
  return (
    <ContentDashboard titulo={"reservas"}>
      {children}
    </ContentDashboard>
  )
}

export default reservasPage