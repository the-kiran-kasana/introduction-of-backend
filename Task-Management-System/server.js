// server.js
const express = require("express");
const { createConnection } = require("./config/mongodb.config");
const {taskRoutes} = require("./routes/taskRoutes");
const Task = require("./model/taskSchema");

const app = express();
app.use(express.json());
createConnection();

app.use("/taskSystem" , taskRoutes);


app.listen(8000, () => {
  console.log("🚀 Server is running on port 3000");
});














//const express = require("express")
//const {createConnection} = require("./config/mongoDb.config");
//const app = express();
//
//app.use(express.json());
//
//createConnection();
//
//app.listen(3000 , () =>{
//  console.log("server is running on 3000");
//})
//
