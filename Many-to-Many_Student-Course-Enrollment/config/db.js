const mongoose = require("mongoose")
require('dotenv').config()


const connectDB = async () => {
   try{
//       await mongoose.connect("mongodb://127.0.0.1:27017/user_management"); //environment verilble
       await mongoose.connect(process.env.mongo_URl);
       console.log("nodejs is connected to mongoDB");
   }catch(err){
       console.log("nodejs is not connected to mongoDB");
   }
}

module.exports = {connectDB};