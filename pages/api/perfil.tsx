import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

export default function profileHandler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ error: "Not authorized" })

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET)
    return res.status(200).json({ email: data.email, nombre: data.nombre, rol: data.rol, isSuper: data.isSuperUser })
  } catch (err) {
    return res.status(401).json({ error: "Not authorized" })
  }
}