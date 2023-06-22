import React from 'react'
import { useRouter } from 'next/router'

function Respuesta() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>Respuesta {id}</div>
  )
}

export default Respuesta