const express = require("express");
const { authenticateUser } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/google", authenticateUser);

module.exports = router;
