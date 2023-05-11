const Task = require("../../models/Task");

const getTask = async (req, res) => {
  const { method } = req;
  if (method == "GET") {
    try {
      const tareas = await Task.find();
      res.status(200).json(tareas);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
  if (method == "POST") {
    try {
      const { id, titulo, descripcion, estado } = req.body;
      const task = await Task.create({ id, titulo, descripcion, estado });
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.send({ error: "faltan datos" });
    const deletedTask = await Task.deleteOne({ _id: id });
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
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
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getTask, deleteTask, switchTaskComplete };
