

import express from "express";
import pool from "../databasepg.js";

const router = express.Router();

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
        res.status(500).json({ error: "Server error during profile save." });
    }
});


router.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;

        // Validation check is now at the start
        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" });
        }

        const query = `
            SELECT 
                u.username,             
                p.name, p.age, p.gender, p.school, p.picture_url, 
                p.location, p.bio       -- Assuming your 'profiles' table has these columns
            FROM users u
            LEFT JOIN profiles p ON u.id = p.user_id
            WHERE u.id = $1;
        `;

        const result = await pool.query(query, [user_id]);

        if (result.rows.length === 0) {

            return res.status(404).json({ message: "Profile not found" });
        }


        res.json({ profile: result.rows[0] });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error during profile retrieval." });
    }
});

router.get("/", async (req, res) => {
    try {

        const result = await pool.query("SELECT * FROM profiles");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


export default router;