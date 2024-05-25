const mongoose = require("mongoose");
require("dotenv").config();

const mongoConfig = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Database connected!"));
};

module.exports = mongoConfig;
