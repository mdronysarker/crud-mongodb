const Delete = require("../model/todoModel");

const deleteController = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTodo = await Delete.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).send({ error: "Todo not found" });
    }

    res.send(deletedTodo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteController;
