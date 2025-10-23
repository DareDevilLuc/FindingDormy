// Main entry file

import dotenv from "dotenv";
import express from "express";
import cors from "cors";

// Routes
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import matchRoutes from "./routes/match.js";
import messageRoutes from "./routes/message.js";
import preferencesRoutes from "./routes/preferences.js";


dotenv.config({ path: "../.env" });

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// API routes

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/preferences", preferencesRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
