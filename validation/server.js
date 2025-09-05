const express = require("express")
const {connectDB} = require("./config/mongoDB.config.js");
const userRoutes = require("./routes/user.routes");


const app  = express();
app.use(express.json())


connectDB();

app.use("/user" ,userRoutes);

app.get("/test" , (req,res) => {
   res.status(200).json({msg:"get data"});
})

//app.get( (req,res) => {
//   res.status(200).json({msg:"wronge request"});
//})



app.listen(7000 , () => {
console.log("server on 7000");
})






//basic express setup
// connect mongodb to nodejs
//create schema and model
//create route/controller

