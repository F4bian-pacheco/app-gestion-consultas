import React from 'react'
import ContentDashboard from '../../../components/hocs/ContentDashboard'
import Head from 'next/head'
import ReservasContainerComponent from '../../../components/Reservas/Reservas'

function reservasPage({ children }) {
  return (
    <>
      <Head>
        <title>Reservas</title>
      </Head>
      <ContentDashboard titulo={"reservas"}>
        <ReservasContainerComponent />
      </ContentDashboard>
    </>
  )
}

export default reservasPage