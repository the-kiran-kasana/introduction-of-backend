const express = require("express");
const {connectDB} = require("./config/db");
const {userRoutes} = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
connectDB();


app.use("/userRoutes" , userRoutes);
app.use("/orderRoutes" , orderRoutes);


app.use((req,res) => {
   res.status(404).json({msg : "404 not found"});
})


app.listen(2000, () => {
 console.log("server is running on 2000");
})