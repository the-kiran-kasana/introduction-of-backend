const courseModel = require("../model/Course.model")
const enrollmentModel = require("../model/Enrollment.model")
const studentModel = require("../model/Student.model")

const express = require("express");
const userRouter = express.Router();



userRouter.post("/add-student" , async(req,res) => {
     const newStudent = req.body;
     const {name ,email ,isActive} = req.body;

     try{
           if(!name || !email || !isActive){
              res.status(200).json({msg : " student  not  added"});
           }else{
               const student = await studentModel.create(newStudent);
               res.status(200).json({msg : "new student added" , student});
           }
     }catch(err){
           res.status(404).json({msg : "student not added , somthing wrong"});
     }
})




userRouter.post("/add-course" , async(req,res) => {
     const newCourse = req.body;
     const {title ,description ,isActive} = req.body;

     try{
           if(!title || !description || !isActive){
              res.status(200).json({msg : " course  not  added"});
           }else{
               const course = await courseModel.create(newCourse);
               res.status(200).json({msg : "new course added" , course});
           }
     }catch(err){
           res.status(404).json({msg : "course not added , somthing wrong"});
     }
})




userRouter.post("/enroll" , async(req,res) => {
     const newEnroll = req.body;
     const { studentId, courseId } = req.body;

     let isActiveStudent = await studentModel.find({isActive : true});
     let isActiveCourse = await courseModel.find({isActive : true});


     try{
           if(!isActiveStudent || !isActiveCourse){
              res.status(200).json({msg : " enroll  not  submitted"});
           }else{
               const enroll = await enrollmentModel.create(newEnroll);
               res.status(200).json({msg : "new enroll added" , enroll});
           }
     }catch(err){
           res.status(404).json({msg : "enroll not submitted , somthing wrong"});
     }
})









module.exports = userRouter;