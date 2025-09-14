const express = require("express");
const todoRoutes = express.Router();
const todoModel = require("../model/todo.model");
const userModel = require("../model/user.model");
const authMiddleware = require("../middleware/auth.middleware");



todoRoutes.post("/add-todo" , authMiddleware(["admin" , "user"]), async (req,res) => {
   try{
       console.log(req.user)
       const todo = await todoModel.create({...req.body , userId : req.user});
       res.status(200).json({ msg: "todo added" , todo });

   }catch(err){
      res.status(500).json({ msg: "Something went wrong in todo" });
   }

})


todoRoutes.get("/getTodo"  , authMiddleware , async(req,res) => {
   try{
       const todo = await todoModel.find({userId : req.user});
       res.status(200).json({ msg: "todos" , todo });

   }catch(err){
      res.status(500).json({ msg: "Something went wrong in login" });
   }

})



module.exports = {todoRoutes}