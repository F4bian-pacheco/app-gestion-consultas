import { pool } from '../../../config/db'

export default async function handler(req, res) {
  const { id, method } = req.query
  if (method === "GET") {
    const [rows] = await pool.query(`SELECT * FROM consultas WHERE id=${id}`)
    res.status(200).json({ data: rows })
  }
}