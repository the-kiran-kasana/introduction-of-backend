const express = require("express")
const mongoose = require("mongoose")
const connectDb = require("./config/mongoDb.config")
const app = express();
mongoose.connect("mongeurl");


app.use(express.json());


connectDb();

app.listen(3000 , () => {
  console.log("sever is running");
})
