const express = require("express")
const fs = require("fs")
const app = express();

app.use(express.json());


app.get("/test" ,(req , res) => {
    res.send("hello router of express");
})

app.get("/home" ,(req,res) =>{
  res.send("hello this is my home page");
})

app.get("/text" , (req ,res) =>{
   let data = fs.readFileSync("./data.txt" ,"utf-8");
   res.send(data);
})


app.get("/htmldata" ,(req ,res) => {
 res.send(`<h1>hello html in the express rounter how you feel </h1>`)
})

app.get("/jsonData" ,(req ,res) => {
 res.send({name:"kiran kasana"});
})


app.get("/jsonDataRes" ,(req ,res) => {
 res.json({name:"kiran kasana gurjar"});
})

app.post("/postRequest" ,(req , res) =>{
// res.send(req.body)
 res.send("it is the post request");
 console.log(req.body)
})


app.put("/updateData" ,(req ,res) => {
 res.send("update the data ...")
})







app.delete("/deleteData" ,(req ,res) => {
 res.send("delete the data ...")
})



//get route that read all course

//
//app.get("/course" ,(req ,res) => {
// let data = fs.readFileSync("./db.json" , "utf-8");
//// let data = JSON.parse(fs.writeFileSync("./db.json" , "utf-8"));
// console.log(data)
// res.send("fetch all course  the data ...")
//})




app.put("/course-update/:id" ,(req ,res) => {

 console.log(req.params);
 res.send({sg:"course update"})
})





app.get("/course/:id" ,(res ,req) => {

   let courseId = req.params;
   console.log(courseId)



//   let data = JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
//   let courses = data.course;
//   console.log(courses)
//   let index = courses.findIndex((course) => course.id == courseId);
//
//   if(index == -1){
//     res.status(404).json({msg:"course not found"});
//   }else{
//      courses.forEach((el ,id) => {
//        if(el.id == courseId){
//           res.status(200).json({msg:"course details" , course :el});
//        }
//      })
//   }
//   console.log(req.params)
//   res.json({msg : "course details "})
})







app.get("/courseName" , (req ,res) => {

 let titles = req.query.title;
 let courseData = JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
 let courses = courseData.course;
 let flag = true;

 courses.forEach((el , id) => {
   if(el.title.includes(titles)){
      flag = false;
      res.json({ msg: "course name found", course:el});
   }
 })

 if(flag == true){
    res.status(404).json({msg:"course not found"});
 }

})








app.listen(3000 , () =>{
 console.log("hello express")
})

















//const isEven = require("is-even");
//
//console.log(isEven(2));  // true
//console.log(isEven(3));  // false
//console.log(isEven("4"));  // false