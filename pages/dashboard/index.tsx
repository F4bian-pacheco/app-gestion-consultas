import React from 'react'
import ContentDashboard from '../../components/hocs/ContentDashboard'

const items = [
  {
    label: 'Inicio',
    path: '/dashboard'
  }
]


function index() {
  return (
    <ContentDashboard titulo={"Home"}>

    </ContentDashboard>
  )
}

export default index