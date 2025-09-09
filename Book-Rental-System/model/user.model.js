const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
      name:{type:String, required : true},
      email : {type:String, required : true , unique:true},
      rentedBooks : {type : mongoose.Schema.Types.ObjectId, ref : "books"}
})

const UserModel =  mongoose.model("Users" ,UserSchema);

module.exports = UserModel;