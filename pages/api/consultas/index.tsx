import { pool } from '../../../config/db'

export default async function handler(req, res) {
  const { method } = req.query
  const [rows] = await pool.query('SELECT * FROM consultas')
  if (method === "GET") {
    res.status(200).json({ data: rows })
  }
}
