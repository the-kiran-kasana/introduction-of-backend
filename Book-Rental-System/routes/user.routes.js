const express = require("express")
const {GetUsers , AddUsers , UpdateUsers, DeleteUsers} = require("../controller/user.controller");
const userRoutes = express.Router();


userRoutes.get("/getUsers" , GetUsers);
userRoutes.post("/addUsers" , AddUsers);
userRoutes.patch("/updateUser" , UpdateUsers);
userRoutes.delete("/deleteUser" , DeleteUsers);


module.exports = {userRoutes};