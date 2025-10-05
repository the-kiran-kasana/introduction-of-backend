const express = require("express");
const fs = require("fs");
const {  writeFileFun , readFileFun } = require("../model/employee.model")




const addBook = async (req , res) => {
     let newEmployee = req.body;
     let {employeeList , employee} = readFileFun();
     let newId = employee[employee.length - 1].id + 1;
     newEmployee = {id:newId , ...newEmployee};
     employee.push(newEmployee);
     employeeList.employees = employee
     writeFileFun(employeeList);
     res.send("employee is added" , employeeList)
}



const getBook =  async (req ,res) => {
    let {employeeList , employee} = readFileFun();
    res.status(200).json({employee : employee})
}




const deleteBook =  async (req ,res) => {
    let employeeId = req.params.id;
   let {employeeList , employee} = readFileFun();
    const deleteEmployee = employee.filter((empy) => empy.id !== Number(employeeId));
    employeeList.employee = deleteEmployee;

    fs.writeFileSync("./db.json" , JSON.stringify(employeeList))
    res.status(200).json({message : "deleted data"})
}



const updateBook =  async (req ,res) => {
    let employeeId = req.params.id;
    let  newEmployee = req.body;
    const employeeList = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    let employee = employeeList.employees;
    let updatedData =  employee.map((el , id) => {
         if(el.id == employeeId){
            return  {...el , ...newEmployee}
         }else{
             return el;
         }
    })
    employeeList.employee = updatedData;
    fs.writeFileSync("./db.json" , JSON.stringify(employeeList))
    res.status(200).json({message : "updated the data"})
}




module.exports = {addBook , getBook , updateBook ,deleteBook};