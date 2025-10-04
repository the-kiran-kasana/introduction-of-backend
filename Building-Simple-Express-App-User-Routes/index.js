const express = require("express")

const app = express();

app.get("/users/get" , (req,res) => {
     res.json({name : "kiran kasana" , age : 20});
})

app.get("/users/list" , (req,res) => {
     res.json([{name : "mahesh kasana" , age : 20} ,{name : "sapna kasana" , age : 20} ,{name : "suman kasana" , age : 20}] );
})

app.use((req,res) => {
     res.json({error : "404 Not Found"});
})

app.listen(6000 , () => {
  console.log("server is running on port 6000");
})
