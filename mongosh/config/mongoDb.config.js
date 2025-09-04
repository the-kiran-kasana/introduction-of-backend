const mongoose = require("mongoose")

const connectDb = () => {

    try{
     mongoose.connect("mongodb://127.0.0.1:27017/mongooseTesrt");
       console.log("mongodb is connect")
    } catch(err){
        console.log(err);
   }
}

module.exports = {connectDb};