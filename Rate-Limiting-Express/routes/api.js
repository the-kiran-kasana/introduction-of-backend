const express = require("express")
const RateLimitRoutes =  express.Router();
const {limiter} = require("../middleware/rateLimiter");

//app.use(limiter);


RateLimitRoutes.get("/api/public" , async (req,res) => {

    try{
        res.status(200).json({message: "This is a public endpoint!"});
    }catch(err){
        res.status(404).json({err});
    }
})



RateLimitRoutes.get("/api/limited" ,limiter , async (req,res) => {
    try{
        res.status(200).json({ message: "You have access to this limited endpoint!"});
    }catch(err){
        res.status(402).json({err});
    }
})


module.exports = {RateLimitRoutes};

