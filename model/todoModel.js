const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  name: String,
  description: String,
});

module.exports = mongoose.model("todo", todoSchema);
