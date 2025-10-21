import express from "express";
import pool from "../databasepg.js";

const router = express.Router();

// Create or update preferences
router.post("/", async (req, res) => {
    try {
        const { user_id, sleep_schedule, budget, study_work_habit } = req.body;

        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" });
        }

        const query = `
      INSERT INTO preferences (user_id, sleep_schedule, budget, study_work_habit)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (user_id)
      DO UPDATE SET
        sleep_schedule = EXCLUDED.sleep_schedule,
        budget = EXCLUDED.budget,
        study_work_habit = EXCLUDED.study_work_habit
      RETURNING *;
    `;

        const values = [user_id, sleep_schedule, budget, study_work_habit];
        const result = await pool.query(query, values);

        res.status(201).json({
            message: "Preferences saved successfully",
            preferences: result.rows[0],
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Get preferences by user_id
router.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const result = await pool.query(
            "SELECT * FROM preferences WHERE user_id = $1",
            [user_id]
        );

        if (result.rows.length === 0)
            return res.status(404).json({ message: "Preferences not found" });

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
