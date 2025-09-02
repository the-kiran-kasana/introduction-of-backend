const express = require("express");
const {readFiles} = require("./read")
const os = require("os")
const dns = require("dns")



const app = express();
const data = readFiles();


app.get("/test" , (req , res) => {
 res.send("Test route is working!");
})


app.get("/readfile" , (req , res) => {
 res.send(data);
})


app.get("/systemDetails" , (req , res) => {

   let totalMem  = (os.totalmem()/(1024 * 1024 * 1024)).toFixed(2);
   let freeMem = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
   res.json({"System Platform" : os.platform() , "CPU Model" : os.arch() , "Total Memory (in GB)" : totalMem , "Free Memory (in GB)" : freeMem});
})


app.get("/getip" , (req , res) => {
  dns.lookup("masaischool.com" , (err ,address,hostname) => {
   if(err) throw err;
   res.send({"ipaddress" : address , "hostname" : hostname})
  })
})


app.listen(3000 , () => {
 console.log("server is stated 3000");
})