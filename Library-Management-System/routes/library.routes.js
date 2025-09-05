const express = require("express");
const LibraryModel = require("../models/library.model");
//const {taskCheck} = require("../middleware/task.middleware");
const LibraryRoutes = express.Router();
const {getAllBook , addNewBook , updateBook ,deleteBook} = require("../controllers/library.controller");



LibraryRoutes.get("/", getAllBook);
LibraryRoutes.post("/addNewBook"  ,addNewBook);
LibraryRoutes.patch("/updateById/:id" ,updateBook);
LibraryRoutes.delete("/deleteBook/:id" ,deleteBook);




module.exports = {LibraryRoutes};