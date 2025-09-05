const express = require("express");
const {connectDb} = require("./config/db");
const {taskRoutes} = require("./routes/task.routes");


const app = express();
app.use(express.json());
app.use("/taskManagment" , taskRoutes);
connectDb();


app.listen(4000, () => {
    console.log("server is running on 4000");
})

