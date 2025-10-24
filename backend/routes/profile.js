import express from "express";
import pool from "../databasepg.js";

const router = express.Router();

// --- GET ALL PROFILES ---
router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM profiles");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// --- GET PROFILE BY USER ID ---
router.get("/:id", async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) return res.status(400).json({ error: "Invalid user ID" });

        const query = `
      SELECT u.username, p.name, p.age, p.gender, p.school, p.location, p.picture_url
      FROM users u
      LEFT JOIN profiles p ON u.id = p.user_id
      WHERE u.id = $1;
    `;
        const result = await pool.query(query, [userId]);

        if (!result.rows[0]) {
            return res.status(200).json({ profile: null }); // handle missing profile gracefully
        }

        res.json({ profile: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error during profile retrieval." });
    }
});

// --- UPSERT PROFILE ---
router.put("/:id", async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) return res.status(400).json({ error: "Invalid user ID" });

        const { name, age, gender, school, location, picture_url } = req.body;

        const query = `
      INSERT INTO profiles (user_id, name, age, gender, school, location, picture_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (user_id)
      DO UPDATE SET
        name = EXCLUDED.name,
        age = EXCLUDED.age,
        gender = EXCLUDED.gender,
        school = EXCLUDED.school,
        location = EXCLUDED.location,
        picture_url = EXCLUDED.picture_url
      RETURNING *;
    `;
        const values = [userId, name, age, gender, school, location, picture_url];

        const result = await pool.query(query, values);
        res.status(200).json({ message: "Profile saved successfully", profile: result.rows[0] });
    } catch (err) {
        console.error("Error updating profile:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
