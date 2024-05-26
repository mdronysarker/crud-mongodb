const Update = require("../model/todoModel");

const updateController = async (req, res) => {
  try {
    const getUpdateTodo = await Update.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    await getUpdateTodo.save();
    res.send(getUpdateTodo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateController;
