const express = require("express");
const OrderRoutes = express.Router();
const {getAllOrder , addNewOrder , updateOrder ,deleteOrder,getOrderByStatus} = require("../controller/order.controller");


OrderRoutes.get("/GetOrder" , getAllOrder);
OrderRoutes.get("/GetOrderStatus" , getOrderByStatus);
OrderRoutes.post("/AddOrder" , addNewOrder);
OrderRoutes.put("/UpdateOrder/:id" , updateOrder);
OrderRoutes.delete("/DeleteOrder" , deleteOrder);


module.exports = {OrderRoutes};