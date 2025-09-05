const TaskModel = require("../models/task.model");


const getAllTask = async (req ,res) => {
       try{
            let task = await TaskModel.find();
            res.status(200).json({msg:"list of all tasks" , task});
       }catch(err){
            res.status(500).json({err});
       }
}





const addNewTask = async (req ,res) => {
         const newTask = req.body;
          try{
             const task = await TaskModel.create(newTask);
             res.status(200).json({msg:"task is added",task});
          }catch(err){
             res.status(500).json({msg:"priority is wrong" , err});
          }
}




const updateTask = async (req ,res) => {
         const {id} = req.params;
          const taskId = await TaskModel.findById(id);

          if(!taskId){
             res.status(406).json({msg:"task not found"});
          }else{
             await Task.findByIdAndUpdate(id , req.body);
             res.status(201).json({msg:"task is updated",taskId});
          }
}




const deleteTask = async (req ,res) => {
        try{
             const {id} = req.params;
             const DeleteTask = await TaskModel.findByIdAndDelete(id);
             if(!DeleteTask){
               return res.status(500).json({msg:"task is not found"});
             }
             res.status(201).json({msg:"delete successfully" , DeleteTask});
        }catch(err){
           res.status(500).json({msg:"somthing wrong"});
        }
}





module.exports = {getAllTask , addNewTask , updateTask ,deleteTask} ;