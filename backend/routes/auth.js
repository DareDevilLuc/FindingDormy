//signup/login

import express from "express";
import bcrypt from "bcrypt";
import pool from "../databasepg.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }
    try {
        // Check if username exists
        const userExists = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: "Username already taken" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        // Insert new user
        const newUser = await pool.query(
            "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username, created_at",
            [username, password_hash]
        );

        res.status(201).json({ message: "User registered!", user: newUser.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }
    try {
        const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if (result.rows.length === 0) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) return res.status(400).json({ error: "Invalid username or password" });

        res.json({ message: "Login successful!", user: { id: user.id, username: user.username } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// // Simple test route to confirm DB works
// router.get("/testdb", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.json({ message: "Connected to PostgreSQL", time: result.rows[0].now });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Database connection failed" });
//   }
// });

export default router;
