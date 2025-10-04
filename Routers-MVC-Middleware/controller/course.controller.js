const {getData , addAndUpdate} = require('../module/course.module')


const getAllCourse = (req , res) => {
   let course = getData().courses;
   console.log(course);
   res.status(200).json({msg : "list of course" , course})
}



const addCourseData = (req,res) => {

   let newCourse = req.body;

   let { data, courses } = getData();
   let id = courses[courses.length - 1].id + 1;

   newCourse = {...newCourse , id}
   courses.push(newCourse)

   addAndUpdate(data);
   res.status(201).json({msg : "add  course"})

}




const deleteData = (req,res) => {

   let deleteId = req.params.Id;
   let {data , courses} = getData();;

   let index = courses.findIndex((course) => course.id == deleteId);

   if(index == -1){
     res.status(404).json({msg : "list of course not found"})
   }
   else{
       data.courses = courses.filter((el ,i) => {
        return el.id != deleteId;
      })
   }

   addAndUpdate(data);
   res.status(200).json({msg : "deleted course"})
}


//get course by path params like get by id

const getCourseById = (req , res) => {

     let courseId = req.params.courseId;
        let courses = getData().courses;
        let index = courses.findIndex((course) => course.id == courseId);

        if(index == -1){
          res.status(404).json({msg : "list of course not found"})
        }
        else{
           courses.forEach((el ,id) => {
            if(el.id == courseId){
              res.status(200).json({msg : "list of course found" , course:el})
            }
           });
        }

}




const updateCourse = (req , res) => {
        let id = req.params.Id;
        let updateCourse = req.body;
        let {data , courses} = getData();

        let index = courses.findIndex((course) => course.id == courseId);

        if(index == -1){
          res.status(404).json({msg : "list of course not found"})
        }
        else{
           let updateCourse = courses.map((el ,i) => {
             if(el.id == id){
              return {...el , ...updateCourse}
             }else{
              return el;
             }
           })
        }

        data.courses = updateCourse;
        addAndUpdate(data);
        res.status(201).json({msg : "deleted course"})

}


module.exports = {deleteData , addCourseData , getAllCourse , getCourseById ,updateCourse};