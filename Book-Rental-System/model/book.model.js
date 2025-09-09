const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  author: { type: String, required: true },
  genre: { type: String }, // optional
  rentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
});

const BookModel =  mongoose.model("books" ,BookSchema);

module.exports = BookModel;