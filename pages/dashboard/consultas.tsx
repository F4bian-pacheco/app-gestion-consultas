import React from 'react'
import ContentDashboard from '../../components/hocs/ContentDashboard'
import ConsultasContainerComponent from '../../components/Consultas/Consultas'
import Head from 'next/head'


function consultasPage({ children }) {

  return (
    <>
      <Head>
        <title>Consultas</title>
      </Head>
      <ContentDashboard titulo={"consultas"}>
        <ConsultasContainerComponent />
      </ContentDashboard>
    </>
  )
}




export default consultasPage