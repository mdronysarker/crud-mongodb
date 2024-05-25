const Todo = require("../model/todoModel");

const registrationController = async (req, res) => {
  const { title, name, description } = req.body;
  if (!title || !name || !description) {
    return res.send({ error: "please fill up all section" });
  } else {
    const todo = new Todo({
      title,
      name,
      description,
    });

    await todo.save();

    res.send(todo);
  }
  // console.log(name, email, phone);
};

module.exports = registrationController;
