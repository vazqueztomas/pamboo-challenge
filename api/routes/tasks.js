const express = require("express");
const router = express.Router();
const taskController = require("../controllers/tasks/tasks");

router.get("/", taskController.getTask);
router.post("/", taskController.getTask);

module.exports = router;
