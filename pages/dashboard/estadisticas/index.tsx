import React from 'react'
import ContentDashboard from '../../../components/hocs/ContentDashboard'
import Head from 'next/head'

function EstadisticasPage() {
  return (
    <div>
      <Head>
        <title>Estadisticas</title>
      </Head>
      <ContentDashboard titulo={"estadisticas"}>
        <h1>Estadisticas</h1>
      </ContentDashboard>
    </div>
  )
}

export default EstadisticasPage