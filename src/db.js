import {createPool} from 'mysql2/promise';
import {dbUser, dBHost, dbDatabase, dbPort, dbPassword } from './config.js'

export const pool = createPool({
  host: dBHost,
  user: dbUser,
  password: dbPassword,
  port: dbPort,
  database: dbDatabase,
});