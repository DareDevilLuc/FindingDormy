import pkg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

console.log("Loaded env:", process.env.PGUSER, process.env.PGPASSWORD);
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

export default pool;
