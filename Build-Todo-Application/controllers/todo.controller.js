const express = require("express")
const {getReadFile ,addNewTask} = require("../models/todo.module");



const getAllTodoListFn = (req,res) => {
      let task = getReadFile().tasks;
      res.status(200).json({msg:"list of todo" ,task});
}



const addTodoListFn = (req , res) => {

   let newTodo = req.body;
   let {taskData , tasks} = getReadFile();
   let id  = tasks[tasks.length - 1].id + 1;
   newTodo = {...newTodo , id}
   tasks.push(newTodo);
   addNewTask(taskData)
   res.status(201).json({msg:"task is added"});

}

const deleteTodoListFn = (req, res) => {
  let deleteId = req.params.id;
  let { taskData, tasks } = getReadFile();

  let index = tasks.findIndex((task) => task.id == deleteId);

  if (index === -1) {
    return res.status(404).json({ msg: "list is not found" });
  } else {

    taskData.tasks = tasks.filter((el) => el.id !== Number(deleteId));
    addNewTask({ task: taskData.tasks });

    return res.status(200).json({ msg: "task deleted successfully" });
  }
};




const updateTodoListFn = (req,res) => {
     const updateId = req.params.id;
     let updateList = req.body;
     let {taskData , tasks} = getReadFile();

     let index = tasks.findIndex((task) => task.id === updateId);

     if(index == -1){
        res.status(404).json({msg : "list of course not found"})
     }
     else
     {
             let updateList = tasks.map((el ,i) => {
                          if(el.id == id){
                           return {...el , ...updateList}
                          }else{
                           return el;
                          }
             })
     }

      taskData.tasks = updateList;
      addNewTask(taskData);
      res.status(201).json({msg : "updated course"})
}



module.exports =  {getAllTodoListFn , addTodoListFn ,deleteTodoListFn ,updateTodoListFn};