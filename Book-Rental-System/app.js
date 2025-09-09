const express = require("express")
const {connectDB} = require("./config/db")
const {userRoutes} = require("./routes/user.routes");
const {bookRoutes} = require("./routes/book.routes");


const app = express();

app.use(express.json());

connectDB();


app.use("/userRoutes" , userRoutes);
app.use("/bookRoutes" , bookRoutes);

//app.use((req,res) => {
//   res.status(404).json({msg : "404 request not found "});
//})

app.listen(7070, (req,res) => {
    console.log("server is running on 3000");
})

