const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({

        title: {type:String,required:true},
        status: {type:Boolean,default:false},
        userId: { type:mongoose.Schema.Types.ObjectId , ref:"Users" }

})

const todoModel = mongoose.model("Todo" , todoSchema)

module.exports = todoModel;