const express = require("express");
const userRoutes = express.Router();
const {getAllUser , updateAddress ,addNewUser,deleteUser} = require("../controller/user.controller");

userRoutes.get("/getAllUser" , getAllUser);
userRoutes.post("/addNewUser" , addNewUser);
userRoutes.patch("/updateUser/:id" , updateAddress);
userRoutes.delete("/deleteUser/:id",deleteUser);

module.exports = {userRoutes}