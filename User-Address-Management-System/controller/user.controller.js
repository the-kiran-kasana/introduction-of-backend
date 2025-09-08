const express = require("express");
const userModel = require("../model/model.schema");
const orderModel = require("../model/model.order");


const getAllUser = async (req,res) =>{

  try{
      const users = await userModel.find();
      res.status(200).json({msg : "list of user" ,users});
      }catch(err){
        res.status(404).json({msg:"not found  user"});
      }
}



const addNewUser = async (req ,res) => {
         const newUser = req.body;
          try{
             const user = await userModel.create(newUser);
             res.status(200).json({msg:"task is added",user});
          }catch(err){
             res.status(500).json({msg:"priority is wrong" , err});
          }
}



const updateAddress =  async (req,res) => {

     const {id} = req.params;
     const userID = await userModel.findById(id);
     console.log(userID);

            if(!userID){
              res.status(404).json({msg : "userId is not found"});
            }else{
              userID.addresses.push(req.body);
              console.log(userID.addresses)
              await userID.save();
              res.status(201).json({msg:"add address to user" ,userID});
            }
}





const deleteUser = async (req,res) => {
   const { id } = req.params;
   try{
         await orderModel.deleteMany({orderedBy:id })
         let orders = await userModel.findByIdAndDelete(id);
        res.status(200).json({msg:"  user is deleted"})
   }catch(err){
        res.status(502).json({msg:"somthing went wrong ,  user is not updated "});
   }
}




module.exports = {getAllUser , updateAddress ,addNewUser,deleteUser};