
//custom middlewere = created by us
const fs = require("fs");

const applicationMiddlewere = (req , res ,next) => {
   let reqData = `method : ${req.method} | endPoint : ${req.url}\n`
   fs.appendFileSync("./log.txt" , reqData)
   next();
}

module.exports = applicationMiddlewere;