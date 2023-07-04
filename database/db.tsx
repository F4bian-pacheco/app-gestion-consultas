import { pool } from '../config/db'

export async function getConsultas() {
  const [rows] = await pool.query('SELECT * FROM consultas')
  return rows
}

