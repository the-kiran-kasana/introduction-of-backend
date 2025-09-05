const express = require("express");
const TaskModel = require("../models/task.model");
const {taskCheck} = require("../middleware/task.middleware");
const taskRoutes = express.Router();
const {getAllTask , addNewTask , updateTask ,deleteTask} = require("../controllers/task.controller");



taskRoutes.get("/", getAllTask);
taskRoutes.post("/addNewTask" , taskCheck ,addNewTask);
taskRoutes.patch("/updateById/:id" ,updateTask);
taskRoutes.delete("/deleteTask/:id" ,deleteTask);




module.exports = {taskRoutes};

