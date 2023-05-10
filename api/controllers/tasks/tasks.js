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

module.exports = { getTask };
