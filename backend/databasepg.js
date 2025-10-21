import pkg from "pg";
import dotenv from 'dotenv';

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
});

export default pool;