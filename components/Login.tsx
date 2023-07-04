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

  const [loginData, setLoginData] = React.useState({
    usuario: '',
    contraseña: ''
  })
  const router = useRouter()


  const handleLoginDataChange = (ev) => {
    setLoginData({
      ...loginData,
      [ev.target.name]: ev.target.value
    })
  }


  const handleSubmit = (ev) => {
    ev.preventDefault()

    console.log(loginData.usuario, loginData.contraseña)
    router.push('/dashboard')
  }

  return (
    <>
      <ImageContainer>
        <StyledImage src="/login-bg.jpg" alt="login" />
      </ImageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Inicio de Sesión</LoginTitle>
        <LoginInput type="text" placeholder="Nombre de Usuario" name='usuario' onChange={handleLoginDataChange} />
        <LoginInput type="password" placeholder="Contraseña" name='contraseña' onChange={handleLoginDataChange} />
        <MyLink href="/">Olvidaste tu contraseña?</MyLink>
        <LoginButton type="submit">Ingresar</LoginButton>
      </LoginForm>
    </>
  )
}

export default Login