// add/edit user preferences

import express from "express";
import pool from "../databasepg.js";

const router = express.Router();

// Create or update a profile
// Create or update a profile
router.post("/", async (req, res) => {
    try {
        const { user_id, name, age, gender, school, picture_url } = req.body;

        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" });
        }

        const query = `
        INSERT INTO profiles (user_id, name, age, gender, school, picture_url)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (user_id)
        DO UPDATE SET
          name = EXCLUDED.name,
          age = EXCLUDED.age,
          gender = EXCLUDED.gender,
          school = EXCLUDED.school,
          picture_url = EXCLUDED.picture_url
        RETURNING *;
      `;

        const values = [user_id, name, age, gender, school, picture_url];
        const result = await pool.query(query, values);

        res.status(201).json({
            message: "Profile saved successfully",
            profile: result.rows[0],
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Get all profiles
router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM profiles");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Get profile by user_id
router.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const result = await pool.query("SELECT * FROM profiles WHERE user_id = $1", [user_id]);

        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" });
        }

        if (result.rows.length === 0)
            return res.status(404).json({ message: "Profile not found" });

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
