import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import {
  ImageContainer,
  StyledImage,
  LoginForm,
  LoginTitle,
  LoginInput,
  LoginButton,
  MyLink
} from '../components/styled/Login.styled'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'



function Login() {

  const [loginData, setLoginData] = React.useState({
    email: '',
    contraseña: ''
  })
  const router = useRouter()

  const { loginUser } = useContext(AuthContext)


  const handleLoginDataChange = (ev) => {
    setLoginData({
      ...loginData,
      [ev.target.name]: ev.target.value
    })
  }


  const handleSubmit = async (ev) => {
    ev.preventDefault()

    // const response = await axios.post("/api/auth/login", loginData)
    // if (response.status === 200) {
    //   router.push('/dashboard')
    // }
    // router.push('/dashboard')
    loginUser(loginData)
  }

  return (
    <>
      <ImageContainer>
        <StyledImage src="/login-bg.jpg" alt="login" />
      </ImageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Inicio de Sesión</LoginTitle>
        <LoginInput type="text" placeholder="Email" name='email' onChange={handleLoginDataChange} />
        <LoginInput type="password" placeholder="Contraseña" name='contraseña' onChange={handleLoginDataChange} />
        <MyLink href="/">Olvidaste tu contraseña?</MyLink>
        <LoginButton type="submit">Ingresar</LoginButton>
      </LoginForm>
    </>
  )
}

export default Login