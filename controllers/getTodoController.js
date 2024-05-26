const Todo = require("../model/todoModel");

const getTodoController = async (req, res) => {
  //   console.log(req.params.id);
  try {
    const getTodos = await Todo.findById(req.params.id);
    res.send(getTodos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getTodoController;
