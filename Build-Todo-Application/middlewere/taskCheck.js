

const taskCheck = (req ,res,next) => {
     const {tastName} = req.body;
     console.log(tastName);

     if(!tastName){
       res.status(406).json({msg:"wrong request"});
     }else{
       next();
     }
}

module.exports = {taskCheck};

