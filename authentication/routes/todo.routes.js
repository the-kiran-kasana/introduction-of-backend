const express = require("express");
const todoRoutes = express.Router();
const todoModel = require("../model/todo.model");
const userModel = require("../model/user.model");
const redis = require("../config/redis")
const authMiddleware = require("../middleware/auth.middleware");



todoRoutes.post("/add-todo" , authMiddleware(["admin" , "user"]), async (req,res) => {
   try{
       let userId = req.user
       const todo = await todoModel.create({...req.body , userId : req.user});
       redis.del(userId)
       res.status(200).json({ msg: "todo added" , todo });

   }catch(err){
      res.status(500).json({ msg: "Something went wrong in todo" });
   }

})



//caching is applied on this routes

todoRoutes.get("/getTodo"  , authMiddleware(["admin" , "user"]) , async(req,res) => {
   try{
       const todo = await todoModel.find({userId : req.user});
       res.status(200).json({ msg: "todos" , todo });

       let userId = req.user;
       let cacheData = await redis.get(userId);
       console.log("cacheData", cacheData)

       if(!cacheData){
          let todos = await todoModel.find({userId : req.user});
          redis.set(userId , JSON.stringify(todos) , "EX", 50);
       }

   }catch(err){
      res.status(500).json({ msg: "Something went wrong in login" });
   }

})



module.exports = {todoRoutes}