const express = require("express");
const {addEmployee , getEmployee , updateEmployee ,deleteEmployees} = require("../controller/employee.controll");
const roleCheckMiddleware = require("../middlewere/roleCheckMiddleware");
const employeeRoutes = express.Router();

employeeRoutes.get("/employees" , roleCheckMiddleware(["admin", "hr"]) , getEmployee);
employeeRoutes.post("/addEmployees" , roleCheckMiddleware(["admin"]) , addEmployee);
employeeRoutes.put("/updateEmployees/:id" , roleCheckMiddleware(["admin", "hr"]) , updateEmployee);
employeeRoutes.delete("/deleteEmployees/:id" ,roleCheckMiddleware(["admin"]) , deleteEmployees);


module.exports = employeeRoutes;