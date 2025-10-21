import express from "express";
import pool from "../databasepg.js";

const router = express.Router();

/**
 * Helper function
 */
export const getRandomMatches = async (userId, limit = 10) => {
  const query = `
    SELECT p2.user_id, p2.name, p2.age, p2.gender, p2.school, p2.picture_url
    FROM profiles p1
    JOIN preferences pref1 ON p1.user_id = pref1.user_id
    JOIN profiles p2 ON p1.user_id != p2.user_id
    LEFT JOIN preferences pref2 ON p2.user_id = pref2.user_id
    WHERE p1.user_id = $1
      AND (pref1.gender_pref IS NULL OR p2.gender = pref1.gender_pref)
      AND (pref2.gender_pref IS NULL OR p1.gender = pref2.gender_pref)
      AND p2.user_id NOT IN (
        SELECT liked_user_id
        FROM swipes
        WHERE user_id = $1
      )
    ORDER BY RANDOM()
    LIMIT $2;
  `;

  const { rows } = await pool.query(query, [userId, limit]);
  return rows;
};

// Route for frontend calls (e.g. GET /match/5?limit=5)
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit } = req.query;

    const matches = await getRandomMatches(userId, limit || 10);
    res.json(matches);
  } catch (error) {
    console.error("Error fetching matches:", error);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
});

export default router;
