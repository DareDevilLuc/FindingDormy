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
app.use(cors());
app.use(express.json());

// API routes
app.use("/auth", authRoutes);
app.use("/profiles", profileRoutes);
app.use("/match", matchRoutes);
app.use("/message", messageRoutes);
app.use("/preferences", preferencesRoutes);


// Basic test routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node backend!" });
});

app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
