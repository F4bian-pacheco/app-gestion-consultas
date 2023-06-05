import React from 'react'
import styled from 'styled-components'
import Login from '../../components/Login'



const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`


function index() {

  return (
    <LoginContainer>
      <Login />
    </LoginContainer>
  )
}

export default index