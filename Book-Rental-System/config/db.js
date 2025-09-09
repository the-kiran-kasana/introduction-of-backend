const mongoose = require("mongoose")

const connectDB = async () => {
     try{
         await mongoose.connect("mongodb://127.0.0.1:27017/Book-Rental-System");
         console.log("nodejs is connected to Database");
     }catch(err){
       console.log("nodejs is not connect to Database");
     }
}

module.exports  = {connectDB}