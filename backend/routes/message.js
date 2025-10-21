// messaging

import express from "express";
import pool from "../databasepg.js";

const router = express.Router();

// 📤 Send message
router.post("/", async (req, res) => {
    const { sender_id, receiver_id, content } = req.body;
    if (!sender_id || !receiver_id || !content) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const query = `
            INSERT INTO messages (sender_id, receiver_id, content, timestamp)
            VALUES ($1, $2, $3, NOW())
            RETURNING *;
        `;
        const { rows } = await pool.query(query, [sender_id, receiver_id, content]);
        res.status(201).json({ message: "Message sent!", data: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to send message" });
    }
});

// 📥 Get messages between two users
router.get("/:user_id/:other_id", async (req, res) => {
    const { user_id, other_id } = req.params;

    try {
        const query = `
            SELECT * FROM messages
            WHERE (sender_id = $1 AND receiver_id = $2)
               OR (sender_id = $2 AND receiver_id = $1)
            ORDER BY timestamp ASC;
        `;
        const { rows } = await pool.query(query, [user_id, other_id]);
        res.json({ messages: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to load messages" });
    }
});

export default router;
