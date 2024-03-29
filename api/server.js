const express = require("express");
const connectDB = require("./db");
const server = express();
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

connectDB();
server.use(credentials);
server.use(cors(corsOptions));
server.use(express.json());

server.get("/", (req, res, next) => {
  return res.json("Pamboo");
});
server.use("/tasks", require("./routes/tasks"));

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
