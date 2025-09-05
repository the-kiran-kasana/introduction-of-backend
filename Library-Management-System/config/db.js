const mongoose = require("mongoose")

const connectDb = async () => {
     try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Library_Management_System");
        console.log("connect to the database");
     }catch(err){
        console.log("not connect to the database");
     }

}

module.exports = {connectDb};