const express = require("express");
const {addBook , getBook , updateBook ,deleteBook} = require("../controller/bookController");
const bookMiddleware = require("../middleware/bookMiddleware");
const bookRoutes = express.Router();

bookRoutes.get("/admin/books" , bookMiddleware(["admin", "hr"]) , getBook);
bookRoutes.post("/admin/books" , bookMiddleware(["admin"]) , addBook);
bookRoutes.patch("/admin/books/:id" , bookMiddleware(["admin", "hr"]) , updateBook);
bookRoutes.delete("/admin/books/:id" ,bookMiddleware(["admin"]) , deleteBook);


module.exports = bookRoutes;