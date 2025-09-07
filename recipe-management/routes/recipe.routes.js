const express = require("express");
const TaskModel = require("../model/recipe.model");
//const {taskCheck} = require("../middleware/recipe.middleware");
const taskRoutes = express.Router();
const {getAllTask , addNewTask , updateTask ,deleteTask ,getRecipeByCuisine ,getByPrice} = require("../controller/recipe.controller");



taskRoutes.get("/", getAllTask);
taskRoutes.get("/getRecipeByCuisine/:cuisine", getRecipeByCuisine);
//taskRoutes.get("/getRecipeByPrepTime", getRecipeByPrepTime);
taskRoutes.get("/getByPrice", getByPrice);
taskRoutes.post("/addNewTask"  ,addNewTask);
taskRoutes.patch("/updateById/:id" ,updateTask);
taskRoutes.delete("/deleteTask/:id" ,deleteTask);




module.exports = {taskRoutes};