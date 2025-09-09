const mongoose = require("mongoose");


const ProfileSchema = new mongoose.Schema({
      profileName:  {type:String,enum : ["fb" , "twitter" ," github" ,"instagram"],required: true},
      url: { type: String, required: true , match: /^(https?:\/\/)[^\s$.?#].[^\s]*$/}
})


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true ,unique : true , min : 6},
  password: { type: Number, required: true },
  profiles: [ProfileSchema]
});



const UserModel = mongoose.model("User_Address", UserSchema);

module.exports = UserModel;
