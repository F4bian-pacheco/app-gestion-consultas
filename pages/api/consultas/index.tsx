import { NextApiRequest, NextApiResponse } from 'next'
import { pool } from '../../../config/db'
import { getConsultas } from '../../../database/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req.query
  if (method === "GET") {
    const rows = await getConsultas()
    res.status(200).json({ data: rows })
  }
}
