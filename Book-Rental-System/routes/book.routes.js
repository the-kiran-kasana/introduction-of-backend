const express = require("express")
const {AddBooks} = require("../controller/book.controller");
const bookRoutes = express.Router();


bookRoutes.post("/addBooks" , AddBooks);




module.exports = {bookRoutes};
