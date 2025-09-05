const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
      name:{type:String ,required:true},
      email:{type:String},
      age:{type:Number,min:20,max:100},                     //validation
      gender:{type:String}
      address : [{                                         //nested document , doucment inside the document
          houseNo : {type:String ,required:true},
          area:{type:String ,required:true},
          teshil:{type:String ,required:true},
          district:{type:String ,required:true},
          state:{type:String ,required:true},
          pincode:{type:Number,required:true},
          phoneNumber:{type:Number , required:true}

      }]
})

const userModel = mongoose.model("User" , userSchema);

module.exports = userModel;