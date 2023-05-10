const Task = require("../../models/Task");

const getTask = async (req, res) => {
  if (req.method == "GET") {
    try {
      const tareas = await Task.find();
      res.status(200).json(tareas);
    } catch (error) {
      console.log(error);
    }
  }
  if (req.method == "POST") {
    try {
      const { id, titulo, descripcion, estado } = req.body;
      const task = await Task.create({ id, titulo, descripcion, estado });
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
    }
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.send({ error: "faltan datos" });
    const deleteTask = await Task.deleteOne({ _id: id });
    res.status(200).json(deleteTask);
  } catch (error) {
    console.error(error);
  }
};

const switchTaskComplete = async (req, res) => {
  try {
    const { id } = req.params;
    const taskComplete = await Task.findOneAndUpdate(
      { _id: id },
      { estado: true }
    );

    res.status(200).json(taskComplete);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getTask, deleteTask, switchTaskComplete };
