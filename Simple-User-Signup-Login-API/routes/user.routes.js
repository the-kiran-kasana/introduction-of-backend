const express = require("express");
const userModel = require("../model/user.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
//const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const userRoutes = express.Router();



userRoutes.post("/signupUser" ,async (req , res) => {

    try{
         const {username ,email , password} = req.body;
         bcrypt.hash(password, saltRounds, async function(err, hash) {

             if(err){
                res.status(500).json({ msg: "Something went wrong in signup bcrypt",err })
             }else{
                  const user = await userModel.create({username , email ,password:hash});
                  res.status(200).json({ msg: "Signup success" ,hash});
             }
        });

    }catch(err){
       console.log(err)
        res.status(500).json({ msg: "Something went wrong in signupUser",err });
    }

})



userRoutes.post("/loginUser" ,async (req , res) => {

    try{
         const {email , password} = req.body;
         const user =  await userModel.findOne({email});
         if(!user){
           res.status(500).json({ msg: "user not found plz signup" })
         }else{
           let hash = user.password;
           bcrypt.compare(password, hash).then(function(result) {
             if(result){
                res.status(200).json({ msg: "login success" });
             }else{
                res.status(404).json({ msg: "user not found plz signup" })
             }
           });

         }

    }catch(err){
       console.log(err)
        res.status(500).json({ msg: "Something went wrong in signupUser",err });
    }

})






module.exports = {userRoutes};