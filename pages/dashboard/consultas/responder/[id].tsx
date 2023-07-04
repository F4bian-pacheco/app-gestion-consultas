import React from 'react'
import { useRouter } from 'next/router'
import ContentDashboard from '../../../../components/hocs/ContentDashboard'

// añadir formulario usando react-hook-form
const RespuestaContainerComponent = () => {
  const [data, setData] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setData(event.target.respuesta.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="respuesta">Respuesta</label>
        <textarea name="respuesta" id="respuesta" cols={30} rows={10}></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p>{data}</p>
    </div>
  )
}

function Respuesta() {
  const router = useRouter()
  const { id } = router.query
  return (
    <ContentDashboard titulo={"respuestas"}>
      <RespuestaContainerComponent />
    </ContentDashboard>
  )
}

export default Respuesta