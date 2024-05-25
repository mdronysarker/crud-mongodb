const express = require("express");
const route = express.Router();
const todoController = require("../../controllers/todoController");

route.post("/todo", todoController);

module.exports = route;
