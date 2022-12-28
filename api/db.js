import dotenv  from "dotenv"
import mysql from "mysql"
dotenv.config({ path: '../.env' })

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

