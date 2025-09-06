const express = require("express");
const LibraryModel = require("../models/library.model");
const {StatusCheck} = require("../middleware/library.middleware");
const LibraryRoutes = express.Router();
const {getAllBook , addNewBook , updateBook ,deleteBook} = require("../controllers/library.controller");



LibraryRoutes.get("/", getAllBook);
LibraryRoutes.post("/addNewBook" ,StatusCheck ,addNewBook);
LibraryRoutes.patch("/updateById/:id" ,updateBook);
LibraryRoutes.delete("/deleteBook/:id" ,deleteBook);




module.exports = {LibraryRoutes};