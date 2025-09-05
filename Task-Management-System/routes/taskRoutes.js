const express = require("express");
const Task = require("../model/taskSchema");
const taskRoutes = express.Router();




taskRoutes.get("/", async (req, res) => {
     try{
       let task = await Task.find();
       res.status(200).json({msg:"list of all tasks" , task});
     }catch(err){
       res.status(500).json({err});
     }
});



taskRoutes.post("/addNewTask" , async (req,res) => {
     const newTask = req.body;
     const task = await Task.create(newTask);
     res.status(200).json({msg:"task is added",task});
});



taskRoutes.patch("/updateById/:id" , async (req , res) =>{

     const {id} = req.params;
     const taskId = await Task.findById(id);
     if(!taskId){
        res.status(406).json({msg:"task not found"});
     }else{
        await Task.findByIdAndUpdate(id , req.body);
        res.status(201).json({msg:"task is updated",taskId});
     }
})




taskRoutes.delete("/deleteTask/:id" , async (req ,res) => {
  try{
       const {id} = req.params;
       const DeleteTask = await Task.findByIdAndDelete(id);
       if(!DeleteTask){
         return res.status(500).json({msg:"task is not found"});
       }
       res.status(201).json({msg:"delete successfully" , DeleteTask});
  }catch(err){
     res.status(500).json({msg:"somthing wrong"});
  }
});



module.exports = {taskRoutes};





