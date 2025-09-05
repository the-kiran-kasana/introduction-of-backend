const express = require("express")
const userRoutes = express.Router();

userRoutes.post("/add-user" , async (req,res) => {
    try{
        let user = await  userModel.create(req.body);
        res.status(200).json({mag:"new user is added"});
    }catch(err){
        res.status(400).json({mag:"new user is not added"});
    }

})

module.exports = userRoutes;
