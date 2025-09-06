const express = require("express");
const {connectDb} = require("./config/db");
const {LibraryRoutes} = require("./routes/library.routes");
const {overdueFeesFun} = require("./controllers/library.controller");


const app = express();
app.use(express.json());
app.use("/libraryManagment" , LibraryRoutes);
connectDb();
overdueFeesFun();

app.listen(9000, () => {
    console.log("server is running on 9000");
})

