const UserModel = require("../model/user.model");



const GetUsers = async (req ,res) => {
      try{
         let users = await UserModel.find();
         res.status(200).json({msg : "list of all users" , users});
      }catch(err){
         res.status(500).json({msg : "somthing happen wrong"});
      }
}


const AddUsers = async (req ,res) => {
      try{
         let users = await UserModel.create(req.body);
         res.status(200).json({msg : "added a new users" , users});
      }catch(err){
         res.status(500).json({msg : "somthing happen wrong"});
      }
}

//
//
//
//const RentBooks = async (req ,res) => {
//      try{
//         let books = await BookModel.create(req.body);
//         res.status(200).json({msg : "added a new users" , books});
//      }catch(err){
//         res.status(500).json({msg : "somthing happen wrong"});
//      }
//}
//
//
//
//const ReturnBooks = async (req ,res) => {
//      try{
//         let books = await BookModel.create(req.body);
//         res.status(200).json({msg : "added a new users" , books});
//      }catch(err){
//         res.status(500).json({msg : "somthing happen wrong"});
//      }
//}









const UpdateUsers = async (req ,res) => {

      const {id} = req.params;
      const userId = await UserModel.findById(id)
      try{
          if(!userId) {
              res.status(400).json({msg : "user not found"});
          }else{
               let users = await UserModel.findByIdAndUpdate(userId , req.body);
               res.status(200).json({msg : "added a new users" , users});
          }
      }catch(err){
         res.status(500).json({msg : "somthing happen wrong"});
      }
}



const DeleteUsers = async (req ,res) => {

      const {id} = req.params;
      const userId = await UserModel.findById(id)
      try{
          if(!userId){
             res.status(400).json({msg : "user not found"});
          }else{
             let users = await UserModel.findByIdAndDelete(userId);
             res.status(200).json({msg : "added a new users" , users});
          }
      }catch(err){
         res.status(500).json({msg : "somthing happen wrong"});
      }
}







module.exports = {GetUsers , AddUsers , UpdateUsers, DeleteUsers};