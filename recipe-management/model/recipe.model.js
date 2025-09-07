const mongoose = require("mongoose")



const RecipeSchema = new mongoose.Schema({
     recipe_id :{type:Number ,require:true},
     name:{type:String ,require:true,unique:true},
     ingredients: { type: [String],  required: true },
     cuisine:{type:String ,require:true},
     prep_time:{type:Number ,require:true},
     difficulty:{type:String ,require:true},
     price:{type:Number ,require:true}
});




const RecipeModel = mongoose.model("Recipe_System_management" , RecipeSchema);

module.exports = RecipeModel;
