const fs = require("fs");

const getData = () => {

       let data = JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
       let courses = data.courses;
       return {data , courses}
}




const addAndUpdate = (data) => {

  fs.writeFileSync("./db.json" , JSON.stringify(data));

}


module.exports = {getData , addAndUpdate};