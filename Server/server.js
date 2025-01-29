const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db");
const cookieParser = require("cookie-parser");
const port = process.env.port;

// Connect to database
connectDB();

// Middleware to parse cookies
app.use(cookieParser());

// Add middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", require("./routes/signupLoginRoute"));

app.get("/api/", (req, res) => {
  res.status(200).send("API Up & Running...");
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
