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
             res.status(500).json({msg:"book is wrong" , err});
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
               return res.status(404).json({msg:"task is not found"});
             }
             res.status(200).json({msg:"delete successfully" , DeleteTask});
        }catch(err){
           res.status(404).json({msg:"somthing wrong"});
        }
}



const overdueFeesFun = async (req, res) => {
  try {
    const books = await LibraryModel.find();

    for (let book of books) {
      if (book.returnDate && book.returnDate < Date.now()) {
        book.overdueFees = (book.overdueFees || 0) + 10;
        await book.save();
      }
    }

   // res.status(200).json({ msg: "Overdue fees updated successfully" });
  } catch (err) {
    console.error("Overdue fee error:", err);
    //res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};





module.exports =  {getAllBook , addNewBook , updateBook ,deleteBook ,overdueFeesFun};