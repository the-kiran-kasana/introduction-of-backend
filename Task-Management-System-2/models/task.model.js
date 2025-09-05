const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
     title:{type:String ,require:true,unique:true},
     description:{type:String ,require:true},
     priority:{type:String ,require:true},
     isCompleted:{type:String ,require:true},
     completionDate:{type:String ,require:true},
     dueDate:{type:String ,require:true}
});


const TaskModel = mongoose.model("Task_System_management" , taskSchema);

module.exports = TaskModel;
