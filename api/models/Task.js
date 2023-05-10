const DB = require("mongoose");

const taskSchema = new DB.Schema({
  titulo: { type: String },
  descripcion: { type: String },
  estado: { type: Boolean },
});

module.exports = DB.model("Task", taskSchema);
