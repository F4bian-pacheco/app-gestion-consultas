import jwt from 'jsonwebtoken'

export default function profileHandler(req, res) {
  const { token } = req.cookies
  if (!token) return res.status(401).json({ error: "Not authorized" })
  const data = jwt.verify(token, process.env.JWT_SECRET)
  res.status(200).json({ data })
}