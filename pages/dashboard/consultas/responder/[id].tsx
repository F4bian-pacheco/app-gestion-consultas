import React from 'react'
import { useRouter } from 'next/router'
import ContentDashboard from '../../../../components/hocs/ContentDashboard'

function Respuesta() {
  const router = useRouter()
  const { id } = router.query
  return (
    <ContentDashboard titulo={"respuestas"}>
      Respuesta {id}
    </ContentDashboard>
  )
}

export default Respuesta