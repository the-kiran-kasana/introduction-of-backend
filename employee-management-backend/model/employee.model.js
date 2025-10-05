const express = require("express");
const fs = require("fs");

const readFileFun = () => {
       let employeeList = JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
       let employee = employeeList.employees;
       return {employeeList , employee};
}


const writeFileFun = (data) => {
      fs.writeFileSync("./db.json" , JSON.stringify(data));
}


module.exports = {  writeFileFun , readFileFun }
