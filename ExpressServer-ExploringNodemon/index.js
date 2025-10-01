const express = require("express");

const app = express();


app.get("/home" , (req , res) =>{
   res.send("This is home page");
})


app.get("/contactus" , (req , res) =>{
   res.send("Contact us at contact@contact.com");
})


app.get("/about" , (req , res) =>{
   res.status(200).json("Welcome to the About page!");
})


app.listen(3000 , () => {
 console.log("server is started 3000")
})