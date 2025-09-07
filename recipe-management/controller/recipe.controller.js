const RecipeModel = require("../model/recipe.model");


const getAllTask = async (req ,res) => {
       try{
            let task = await RecipeModel.find();
            res.status(200).json({msg:"list of all tasks" , task});
       }catch(err){
            res.status(500).json({err});
       }
}





const getRecipeByCuisine = async (req ,res) => {
       try{
            let cuisineType = req.params.cuisine;
            let task = await RecipeModel.find({cuisine:cuisineType});
            res.status(200).json({msg:"list of all tasks" , task});
       }catch(err){
            res.status(500).json({err});
       }
}



//
//const getRecipeByPrepTime = async (req ,res) => {
//       try{
//              recipes.forEach((el, i) => {
//                   console.log(`Recipe ${i + 1} Prep Time:`, el.prep_time);
//              });
//
////               (RecipeModel.prep_time);
////              if(RecipeModel.prep_time < 30)
////              {
////                 console.log(RecipeModel.prep_time)
//                 let task = await RecipeModel.find();
//                 res.status(200).json({msg:"list of all tasks" , task});
//             // }
//
//       }catch(err){
//            res.status(500).json({err});
//       }
//}



const getByPrice = async (req,res) =>{
    try{
        let recipes = await RecipeModel.find({ price: 500 });
        res.status(200).json({msg:"list of all tasks" , recipes});

    }catch(err){
         res.status(500).json({err});
    }
}

//
//const RecipeBySort = (req,res) => {
//      res.status(200).json({msg:"list of all tasks"});
//}











const addNewTask = async (req ,res) => {
         const newTask = req.body;
          try{
             const task = await RecipeModel.create(newTask);
             res.status(200).json({msg:"task is added",task});
          }catch(err){
             res.status(500).json({msg:"priority is wrong" , err});
          }
}




const updateTask = async (req ,res) => {
          const {id} = req.params;
          const taskId = await RecipeModel.findById(id);

          if(!taskId){
             res.status(406).json({msg:"task not found"});
          }else{
             await RecipeModel.findByIdAndUpdate(id , req.body);
             res.status(201).json({msg:"task is updated",taskId});
          }
}




const deleteTask = async (req ,res) => {
        try{
             const {id} = req.params;
             const DeleteTask = await RecipeModel.findByIdAndDelete(id);
             if(!DeleteTask){
               return res.status(500).json({msg:"task is not found"});
             }
             res.status(201).json({msg:"delete successfully" , DeleteTask});
        }catch(err){
           res.status(500).json({msg:"somthing wrong"});
        }
}





module.exports = {getAllTask , addNewTask , updateTask ,deleteTask ,getRecipeByCuisine ,getByPrice};