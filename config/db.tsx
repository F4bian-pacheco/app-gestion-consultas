import { createPool, Pool } from 'mysql2/promise'
import { config } from 'dotenv'

config()


export const pool: Pool = createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'gestiondb',
  port: Number(process.env.DB_PORT) || 3306
})
