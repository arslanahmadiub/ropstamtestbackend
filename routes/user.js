const express = require("express");
const { saveUser } = require("../controllers/userRegistrationCotroller");
const { signIn } = require("../controllers/auth");
const router = express.Router();

router.post("/register", saveUser);
router.post("/auth", signIn);

module.exports = router;
