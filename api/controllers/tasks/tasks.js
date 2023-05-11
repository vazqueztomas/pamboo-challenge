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
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    task.estado = !task.estado;

    await task.save();

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getTask, deleteTask, switchTaskComplete };
