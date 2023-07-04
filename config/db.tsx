import { createPool, Pool } from 'mysql2/promise'



export const pool: Pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gestiondb',
  port: 3306
})
