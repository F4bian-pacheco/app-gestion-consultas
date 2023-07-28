import { serialize } from 'cookie'
import { verify } from 'jsonwebtoken'

export default function logoutHandler(req, res) {

  const { token } = req.cookies

  if (!token) return res.status(401).json({ error: "Not authorized" })

  try {
    verify(token, process.env.JWT_SECRET)
    res.setHeader("Set-Cookie", serialize("token", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      expires: new Date(0),
      path: "/"
    }));
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(401).json({ error: "Not authorized" })
  }
}