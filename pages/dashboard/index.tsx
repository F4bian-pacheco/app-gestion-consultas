import React from 'react'
import ContentDashboard from '../../components/hocs/ContentDashboard'
import Head from 'next/head'

const items = [
  {
    label: 'Inicio',
    path: '/dashboard'
  }
]


function index() {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <ContentDashboard titulo={"Home"}>
        {/* insertar cards */}
      </ContentDashboard>
    </>
  )
}

export default index