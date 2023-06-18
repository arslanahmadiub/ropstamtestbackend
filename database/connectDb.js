const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect("mongodb://localhost/ropstamptest", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch((error) => console.error("Connection error", error));
};

module.exports.connectDb = connectDb;
