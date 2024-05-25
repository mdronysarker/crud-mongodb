const express = require("express");
const route = express.Router();
const auth = require("../api/todo");

route.use("/auth", auth);

module.exports = route;
