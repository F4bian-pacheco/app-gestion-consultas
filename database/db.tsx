import { pool } from '../config/db'


async function checkUser(email: string) {
  const [rows] = await pool.query(`SELECT * FROM usuarios WHERE email='${email}'`)
  return rows.length > 0
}

async function checkPassword(email: string, password: string) {
  const [rows] = await pool.query(`SELECT * FROM usuarios WHERE email='${email}' AND password='${password}'`)
  return rows.length > 0
}

export async function checkLogin(email: string, password: string) {
  const userExists = await checkUser(email)
  if (userExists) {
    const passwordCorrect = await checkPassword(email, password)
    if (passwordCorrect) {
      return true
    }
  }
  return false
}

export async function getUsuario(email: string, password: string) {
  if (await checkLogin(email, password)) {
    const [rows] = await pool.query(`SELECT * FROM usuarios WHERE email='${email}'`)
    return rows[0]
  }
  return null
}



export async function getConsultas() {
  const [rows] = await pool.query('SELECT * FROM consultas')
  return rows
}
