const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());



app.post("/students" , async (req ,res) => {
    let  newStudent = req.body;
    const studentList = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    const studentArr = studentList.studentData;
    const id = studentArr[studentArr.length - 1].id + 1;
    newStudent = {...newStudent ,id};
    studentArr.push(newStudent)
    fs.writeFileSync("./db.json" , JSON.stringify(studentList))
})



app.get("/students" , async (req ,res) => {
    const studentList = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    const studentArr = studentList.studentData;
    res.status(200).json({students : studentArr})
})



app.get("/students/search" , async (req ,res) => {
    const newCourses  = req.query.course;

    const studentList = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    const studentArr = studentList.studentData;

    let listCourse = studentArr.filter((courses) => courses.course == newCourses)

    res.status(200).json({students : listCourse})
})




app.get("/students/:id" , async (req ,res) => {
    const studentId = req.params.id;
    const studentList = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    const studentArr = studentList.studentData;
    studentArr.forEach((el , id) => {
      if(el.id == studentId){
          res.status(200).json({students : el})
      }
    })
})



app.delete("/students/:id" , async (req ,res) => {
    let studentId = req.params.id;
    let studentList = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    let studentArr = studentList.studentData;
    const deleteStudent = studentArr.filter((student) => student.id !== Number(studentId));
    studentList.studentData = deleteStudent;

    fs.writeFileSync("./db.json" , JSON.stringify(studentList))
    res.status(404).json({error : "404 not found"})
})



app.put("/students/:id" , async (req ,res) => {
    let studentId = req.params.id;
    let  newStudent = req.body;
    let studentList = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    let studentArr = studentList.studentData;
    let updatedData =  studentArr.map((el , id) => {
         if(el.id == studentId){
            return  {...el , ...newStudent}
         }else{
             return el;
         }
    })
    studentList.studentData = updatedData;
    fs.writeFileSync("./db.json" , JSON.stringify(studentList))
    res.status(200).json({message : "updated the data"})
})




app.use((req ,res) => {
    res.status(404).json({error : "404 not found"})
})

app.listen(9000 , () => {
   console.log("server is running on 9000");
})