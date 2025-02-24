const express = require("express");
const {
  registerUser,
  loginUser,
  getMyProfile,
} = require("../services/authService");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/my-profile", authMiddleware, getMyProfile);

module.exports = router;
