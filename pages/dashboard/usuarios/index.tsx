import React from 'react'
import ContentDashboard from '../../../components/hocs/ContentDashboard'
import Head from 'next/head'

function UsuariosPage() {
  return (
    <div>
      <Head>
        <title>Usuarios</title>
      </Head>
      <ContentDashboard titulo={"usuarios"}>
        <h1>Usuarios</h1>
      </ContentDashboard>
    </div>
  )
}

export default UsuariosPage