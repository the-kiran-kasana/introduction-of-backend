const express  = require("express");
const courseRouter = express.Router();
const {dataCheck} = require("./middlewere/dataCheck");
const {getAllCourse , addCourseData , deleteData ,getCourseById ,updateCourse} = require('./controller/course.controller')




    courseRouter.get("/allCourse" , getAllCourse);
    courseRouter.delete("/deleteCourse/:Id" , deleteData);


    //get course by path params like get by id

    courseRouter.get("/course/:courseId" , getCourseById);
    courseRouter.put("/updateCourse/:id" , updateCourse);
    courseRouter.post("/addCourse" , dataCheck ,addCourseData);




module.exports = courseRouter;

