import { useRouter } from 'next/router'
import React from 'react'
import {
  ImageContainer,
  StyledImage,
  LoginForm,
  LoginTitle,
  LoginInput,
  LoginButton,
  MyLink
} from '../components/styled/Login.styled'



function Login() {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()


  const handleUsernameChange = (ev) => {
    setUsername(ev.target.value)
  }

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    console.log(username, password)
    router.push('/dashboard')
  }

  return (
    <>
      <ImageContainer>
        <StyledImage src="/login-bg.jpg" alt="login" />
      </ImageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Inicio de Sesión</LoginTitle>
        <LoginInput type="text" placeholder="Nombre de Usuario" name='usuario' onChange={handleUsernameChange} />
        <LoginInput type="password" placeholder="Contraseña" name='contraseña' onChange={handlePasswordChange} />
        <MyLink href="/">Olvidaste tu contraseña?</MyLink>
        <LoginButton type="submit">Ingresar</LoginButton>
      </LoginForm>
    </>
  )
}

export default Login