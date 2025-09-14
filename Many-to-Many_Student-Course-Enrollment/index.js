const express = require("express");
const {connectDB} = require("./config/db")
const userRouter = require("./routes/user.routes");
const app = express();
app.use(express.json());
require('dotenv').config()


const PORT = process.env.PORT;
connectDB();


app.use("/userRoutes" , userRouter);

app.get("/getAll" , (req,res) => {
   res.status(200).json({msg : "get all the data"});
})

app.use((req,res) => {
   res.status(404).json({msg : "404 not found"});
})

app.listen(PORT , () => {
 console.log("server is running on localhost 8080");
})