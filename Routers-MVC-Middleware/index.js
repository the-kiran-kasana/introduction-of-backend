const express = require("express")
const courseRouter = require("./course.router")
const app = express();
const {limiter} = require("./middlewere/rateLimit");
const applicationMiddlewere = require("./middlewere/applicationMiddlewere")
//extrnal middlewere


app.use(express.json()); //inbuild middlewere
app.use(applicationMiddlewere);
app.use("/course" , courseRouter);
//app.use(limiter)



app.use((req, res) => {
  res.status(404).json({ msg: "This request is not found" });
})


app.listen(3000 , () =>{
  console.log("server is running on port 3000");
})