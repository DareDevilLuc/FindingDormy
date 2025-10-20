import pool from "./databasepg.js"; 

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Connected to PostgreSQL:", result.rows[0]);
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        pool.end();
    }
}

testConnection();
