const mongoose = require("mongoose")

const createConnection = async () => {
  try {
     await mongoose.connect("mongodb://127.0.0.1:27017/orderSystem");
     console.log("connect to database")
  }catch(err){
    console.log(err);
    console.log("not connect to database");
  }
}

module.exports = {createConnection}
