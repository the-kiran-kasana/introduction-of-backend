const express = require("express")
const orderModel = require("../model/model.order");
const userModel = require("../model/model.schema");

const orderRoutes = express.Router();





orderRoutes.get("/getOrder" , async (req,res) => {
     let orders = await orderModel.find();
     res.status(200).json({msg:"get all orders" , orders })
})



orderRoutes.get("/getOrderbyId/:id" , async (req,res) => {
   const { id } = req.params;
   try{
        let user = await userModel.findById({_id : id},{name : 1 , _id:0})
        let orders = await orderModel.find({ orderedBy: id });
        if(user == null && orders.length == 0 ){
          res.status(200).json({msg:"user and order not found "})
        }
//        let orders = await orderModel.find({ orderedBy: id }).populate("orderedBy" , "name -_id");
        res.status(200).json({msg:"get all orders" ,details : { user , orders }})
   }catch(err){
        res.status(502).json({msg:"somthing went wrong"});
   }
})







orderRoutes.patch("/updateOrder/:id" , async (req,res) => {
   const { id } = req.params;
   try{
         let orders = await orderModel.findByIdAndUpdate(id , req.body , {new:true});
        res.status(200).json({msg:"get all orders" ,details :  orders })
   }catch(err){
        res.status(502).json({msg:"somthing went wrong , order is not updated "});
   }
})




orderRoutes.delete("/deleteOrder/:id" , async (req,res) => {
   const { id } = req.params;
   try{
         let orders = await orderModel.findByIdAndDelete(id);
        res.status(200).json({msg:" orders is deleted"})
   }catch(err){
        res.status(502).json({msg:"somthing went wrong , order is not updated "});
   }
})





orderRoutes.post("/addOrder" , async (req,res) => {
    try{
          let orders = await orderModel.create(req.body);
          res.status(200).json({msg:"added  orders" , orders })
    }catch(err){
          res.status(500).json({msg:"somthing went wrong"})
    }

})



//cursor method // pagination

orderRoutes.get("/cursorMethod" , async (req,res) => {

//http://localhost:2000/orderRoutes/cursorMethod?page=1&limit=2
// http://localhost:2000/orderRoutes/cursorMethod?page=1&limit=1&sort=orderName&order=asc
       const {page , limit,sort,order} = req.query;
       const paginationValue = (page-1)*limit;
       const limitValue = limit;
       // sort 1 = asc and -1 dec;
       let orders = await orderModel.find().skip(paginationValue).limit(limitValue).sort({orderName:1 });
 //await orderModel.find({orderName : {$regex : name , $option : "i"}})  //partial search
//      let order = await orderModel.find().skip(0).limit(2 );
      res.json({orders});
})



//update standard coding method
module.exports = orderRoutes;