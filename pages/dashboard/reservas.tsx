import React from 'react'
import Dashboard from '../../components/hocs/Dashboard'
import ContentDashboard from '../../components/hocs/ContentDashboard'
import Head from 'next/head'

function reservasPage({ children }) {
  return (
    <>
      <Head>
        <title>Reservas</title>
      </Head>
      <ContentDashboard titulo={"reservas"}>
        {children}
      </ContentDashboard>
    </>
  )
}

export default reservasPage