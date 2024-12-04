const express = require("express");
const { registerUser, loginUser, logout, getUser } = require("../controllers/authController");
const router = express.Router();

router.post("/loginUser", loginUser)
router.post("/registerUser", registerUser)
router.get("/protected", getUser)
router.post("/logout", logout)


module.exports = router