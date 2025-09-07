const express = require("express");
const {connectDb} = require("./config/db");
const {taskRoutes} = require("./routes/recipe.routes");


const app = express();
app.use(express.json());
app.use("/recipeManagement" , taskRoutes);
connectDb();


app.listen(1000, () => {
    console.log("server is running on 4000");
})

