const express = require("express");
const {taskCheck} = require("../middlewere/taskCheck")
const {getAllTodoListFn , addTodoListFn ,deleteTodoListFn ,updateTodoListFn} = require("../controllers/todo.controller");
const todoRoutes = express.Router();


todoRoutes.get("/getallList" , getAllTodoListFn);
todoRoutes.post("/addTodoList" , taskCheck , addTodoListFn);
todoRoutes.delete("/deleteTodoList/:id" , deleteTodoListFn);
todoRoutes.put("/updateTodoList/:id" , updateTodoListFn);


module.exports = {todoRoutes};