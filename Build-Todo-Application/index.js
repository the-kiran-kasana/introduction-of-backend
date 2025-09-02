const express = require("express");
const {todoRoutes} = require("./routes/todo.Routes");
const app = express();

app.use(express.json());
app.use("/TodoList" , todoRoutes);

app.use((req,res) => {
 res.status(406).json({msg:"request is wrong"});
})

app.listen(3000 ,() =>{
console.log("server is running on 3000");
})