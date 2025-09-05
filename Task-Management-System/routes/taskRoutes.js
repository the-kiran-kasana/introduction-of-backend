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


//taskRoutes.patch("/updateById/:id" , async (req , res) =>{
//
//     const id = req.params;
//     const {taskId} = Task.findById(id);
//     if(!taskId){
//        res.status(406).json({msg:"task not found"});
//     }else{
//        await Task.findByIdAndUpdate(id , req.body);
//        res.status(201).json({msg:"task is updated",taskId});
//     }
//})

taskRoutes.delete("/deleteTask/:id" , async (req ,res) => {
     const id = req.params;
     Task.delete(id)
     res.status(201).json({msg:"delete successfully"});
});


module.exports = {taskRoutes};




//// ✅ Test route
//app.get("/", (req, res) => {
//  Task.find()
//  res.send()
//  res.send("Server is running and connected to MongoDB");
//});
//
//
//Task.create({title:"go to the market" , description:"buy some fruit , vegetable,and some other ingredient" ,status:"not complete"})
//.then(() => {
// console.log("data is added in database under the taskSystem collection");
//})



//// ✅ Create task route
//app.post("/tasks", async (req, res) => {
//  try {
//    const task = await Task.create(req.body);
//    res.status(201).json(task);
//  } catch (err) {
//    res.status(500).json({ error: err.message });
//  }
//});
//
// ✅ Get all tasks
//app.get("/tasks", async (req, res) => {
//  try {
//    const tasks = await Task.find();
//    res.json(tasks);
//  } catch (err) {
//    res.status(500).json({ error: err.message });
//  }
//});