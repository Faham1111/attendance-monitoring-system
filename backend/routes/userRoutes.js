const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);  // User Registration
router.post("/login", loginUser);        // User Login
router.get("/profile", protect, getUserProfile); // Get User Profile (Protected Route)

module.exports = router;
