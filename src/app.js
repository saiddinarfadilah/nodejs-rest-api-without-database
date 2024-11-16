const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json()); // Untuk parsing JSON dari request body

// Routes
app.use("/api/users", userRoutes);

module.exports = app;
