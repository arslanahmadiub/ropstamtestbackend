const express = require("express");
const cors = require("cors");
const user = require("./routes/user");
const category = require("./routes/category");
const vehical = require('./routes/vehical');  // New line
const helmet = require('helmet');

const { connectDb } = require("./database/connectDb");
require("dotenv").config();

// Create Express application
const app = express();
app.use(cors());
app.use(helmet());

// Connect with mongod db
connectDb();

// Define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use("/api", user);
app.use("/api", category);
app.use("/api", vehical);

// Start the server
const port = process.env.PORT  | 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
