const BookModel = require("../model/book.model");



const AddBooks = async (req, res) => {
  try {
    let books = await BookModel.create(req.body);
    res.status(200).json({ msg: "Added a new book", books });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};





module.exports = {AddBooks};