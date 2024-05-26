const express = require("express");
const route = express.Router();
const todoController = require("../../controllers/todoController");
const getTodoController = require("../../controllers/getTodoController");

route.post("/todo", todoController);
route.get("/get/:id", getTodoController);

module.exports = route;
