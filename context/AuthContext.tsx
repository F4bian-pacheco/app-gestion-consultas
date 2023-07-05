import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'




export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null
  })

  const [dataUser, setDataUser] = useState({})

  const router = useRouter()

  const test: string = "usuario1"

  const loginUser = async ({ email, contraseña }) => {
    const response = await axios.post("/api/auth/login", { email, contraseña })
    if (response.status === 200) {
      setAuthState({
        token: response.data.token,
        user: response.data.user
      })
      getProfile()
      router.push('/dashboard')
    }
  }

  const getProfile = async () => {
    const response = await axios.get("/api/perfil")
    if (response.status === 200) {
      setDataUser(response.data)
    }
  }

  const context = {
    test,
    loginUser,
    authState,
    getProfile,
    dataUser,
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}