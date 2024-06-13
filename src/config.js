import {config} from 'dotenv';

config();

export const port = process.env.PORT || 4000;
export const dbPort = process.env.DB_PORT;
export const dBHost = process.env.DB_HOST || 'localhost';
export const dbUser = process.env.DB_USER || 'root';
export const dbDatabase = process.env.DB_DATABASE;
export const dbPassword = process.env.DB_PASSWORD;
