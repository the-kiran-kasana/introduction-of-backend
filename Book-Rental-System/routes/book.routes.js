const express = require("express")
const {AddBooks ,RentBooks ,ReturnBooks ,RentalsBooks ,RentalsUser} = require("../controller/book.controller");
const bookRoutes = express.Router();


bookRoutes.post("/addBooks" , AddBooks);
bookRoutes.get("/allRentalsBooks/:id" , RentalsBooks);
bookRoutes.get("/RentalsUser/:id" , RentalsUser);
bookRoutes.patch("/rentBooks/:id" , RentBooks);
bookRoutes.patch("/returnBooks/:id" , ReturnBooks);




module.exports = {bookRoutes};
