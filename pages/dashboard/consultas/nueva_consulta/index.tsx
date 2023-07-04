import React from 'react'
import ContentDashboard from '../../../../components/hocs/ContentDashboard'
import ConsultasContainerComponent from '../../../../components/Consultas/Consultas'
import Head from 'next/head'


function nuevaConsultasPage({ children }) {

  return (
    <>
      <Head>
        <title>Nueva Consulta</title>
      </Head>
      <ContentDashboard titulo={"nueva consulta"}>
        <h1>Nueva Consulta aqui</h1>
      </ContentDashboard>
    </>
  )
}

export default nuevaConsultasPage