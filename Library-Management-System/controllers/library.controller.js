const LibraryModel = require("../models/library.model");


const getAllBook = async (req ,res) => {
       try{
            let book = await LibraryModel.find();
            res.status(200).json({msg:"list of all books" , book});
       }catch(err){
            res.status(500).json({err});
       }
}





const addNewBook = async (req ,res) => {
         const newBook = req.body;
          try{
             const book = await LibraryModel.create(newBook);
             res.status(200).json({msg:"book is added",book});
          }catch(err){
             res.status(500).json({msg:"priority is wrong" , err});
          }
}




const updateBook = async (req ,res) => {
         const {id} = req.params;
          const taskId = await LibraryModel.findById(id);

          if(!taskId){
             res.status(406).json({msg:"task not found"});
          }else{
             await Task.findByIdAndUpdate(id , req.body);
             res.status(201).json({msg:"task is updated",taskId});
          }
}




const deleteBook = async (req ,res) => {
        try{
             const {id} = req.params;
             const DeleteTask = await LibraryModel.findByIdAndDelete(id);
             if(!DeleteTask){
               return res.status(500).json({msg:"task is not found"});
             }
             res.status(201).json({msg:"delete successfully" , DeleteTask});
        }catch(err){
           res.status(500).json({msg:"somthing wrong"});
        }
}



module.exports =  {getAllBook , addNewBook , updateBook ,deleteBook};