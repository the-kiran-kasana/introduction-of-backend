const express = require("express")
const app = express();


app.get("/test" , (req ,res) => {
    res.send("Test route is working!");
})


app.listen(3000 , () => {
 console.log("server is running on 3000");
})