

const taskCheck = (req ,res,next) => {
     const {title , description , priority} = req.body;
//     const newTask = req.body;

    if (!title || !description || !priority){
                res.status(500).json({msg:"wrong task not added"});
    }else{
           next();
    }

//    if (priority !== "low" && priority !== "medium" && priority !== "high") {
//       return res.status(400).json({ msg: "Priority must be 'low', 'medium', or 'high'" });
//    }

}

module.exports = {taskCheck};