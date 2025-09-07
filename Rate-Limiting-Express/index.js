const express = require("express");
const {RateLimitRoutes} = require("./routes/api");


const app = express();
app.use(express.json());


app.use("/ratelimiter" , RateLimitRoutes);



app.use((req,res) => {
    res.status(404).json({error: "404 Not Found , request is wronge"});
})



app.listen(8080 , () =>{
    console.log("server running on 3000 ports");
})