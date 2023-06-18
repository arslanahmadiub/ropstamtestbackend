
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied." });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = authenticate;
