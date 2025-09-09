const BookModel = require("../model/book.model");
const UserModel = require("../model/user.model");



const AddBooks = async (req, res) => {
  try {
    let books = await BookModel.create(req.body);
    res.status(200).json({ msg: "Added a new book", books });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};





const RentBooks = async (req ,res) => {

      const {id} = req.params;
      const { rentedBy } = req.body || {};

      const bookId = await  BookModel.findById(id);

      try{
          if(!bookId){
             res.status(500).json({msg : "data not found"});
          }else{
             await UserModel.findByIdAndUpdate(rentedBy, { rentedBooks: id }, { new: true });
             let books = await BookModel.findByIdAndUpdate(id, req.body, { new: true });
             res.status(200).json({msg : "added a new users" });
            }
      }catch(err){
         res.status(500).json({msg : "somthing happen wrong"});
      }
}





const ReturnBooks = async (req ,res) => {
      const {id} = req.params;
      const book = await BookModel.findById(id)
      const userId = await book.rentedBy;

      try{

         await UserModel.findByIdAndUpdate(userId, { $unset: { rentedBooks: "" } }, { new: true });
         let books = await BookModel.findByIdAndUpdate(id, { $unset: { rentedBy: "" } }, { new: true });
         res.status(200).json({msg : "added a new users" , books});
      }catch(err){
         res.status(500).json({msg : "somthing happen wrong" , error: err.message});
      }

}


//user id

const RentalsBooks = async (req ,res) =>{
      const {id} = req.params;

    try{
         const books = await BookModel.find({rentedBy : id}).populate("rentedBy" , "name  email -_id");
         res.status(200).json({msg:"get all orders" ,details : {  books }})
    }catch(err){
         res.status(500).json({msg : "somthing happen wrong in rental books" , error: err.message});
    }

}




//book id
const RentalsUser = async (req ,res) =>{
      const {id} = req.params;

    try{
         const user = await UserModel.find({rentedBooks : id}).populate("rentedBooks" , "title  author -_id");
         res.status(200).json({msg:"get all user" ,details : {  user }})
    }catch(err){
         res.status(500).json({msg : "somthing happen wrong in rental user" , error: err.message});
    }

}




module.exports = {AddBooks,RentBooks ,ReturnBooks ,RentalsBooks ,RentalsUser};