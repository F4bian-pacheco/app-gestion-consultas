import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { getUsuario } from '../../../database/db'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {

  const { email, contraseña } = req.body

  // check if user exists

  // if (req.cookies.token) return res.status(400).json({ error: "Ya estas logueado" })

  if (req.method === "POST") {
    if (!email || !contraseña) return res.status(400).json({ error: "Faltan datos" })
    const usuario = await getUsuario(email, contraseña)
    if (usuario !== null) {
      const token = jwt.sign({ email, nombre: usuario.nombre, rol: usuario.rol, isSuperUser: usuario.is_superuser }, process.env.JWT_SECRET, { expiresIn: "1h" })
      const cookie = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 3600,
        path: "/"
      })
      res.setHeader("Set-Cookie", cookie)
      return res.status(200).json("login success")
    }
    return res.status(401).json({ error: "invalid email or password" })
  }

}