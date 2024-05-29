const express = require("express");
const route = express.Router();
const todoController = require("../../controllers/todoController");
const getTodoController = require("../../controllers/getTodoController");
const updateController = require("../../controllers/updateController");
const deleteController = require("../../controllers/deleateController");

route.post("/todo", todoController);
route.get("/get/:id", getTodoController);
route.put("/update/:id", updateController);
route.delete("/delate/:id", deleteController);

module.exports = route;
