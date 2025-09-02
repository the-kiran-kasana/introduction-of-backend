const fs = require("fs")

function readFiles()
{
  let data = fs.readFileSync("./data.txt" , "utf-8");
  return data;
}


module.exports = {readFiles};

