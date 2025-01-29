const express = require("express");
const router = express.Router();

const { register, login, getUser, protect } = require("../controllers/signupLoginController");

// Signup route
router.route("/register").post(register);

// Login route
router.route("/login").post(login);

// Get user route (protected)
router.route("/user").get(protect, getUser);

module.exports = router;