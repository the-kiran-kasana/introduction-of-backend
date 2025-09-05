const mongoose = require("mongoose")

const LibrarySchema = new mongoose.Schema({
     title:{type:String ,require:true,unique:true},
     author:{type:String ,require:true},
     status:{type:String ,require:true},
     borrowerName:{type:String ,require:true},
     overdueFees:{type:Number ,require:true},
     borrowDate:{type:Date ,require:true},
     dueDate:{type:Date ,require:true},
     returnDate:{type:Date ,require:true}
});


const LibraryModel = mongoose.model("Library_System_management" , LibrarySchema);

module.exports = LibraryModel;
