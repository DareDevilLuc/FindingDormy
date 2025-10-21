// Main entry file ni sha

import dotenv from "dotenv";
import profileRoutes from "./routes/profile.js";
app.use("/profiles", profileRoutes);

dotenv.config({ path: "../.env" });

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node backend!" });
});

app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
