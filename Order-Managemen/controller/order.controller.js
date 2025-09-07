const OrdersModel = require("../model/order.model");




const getAllOrder = async (req ,res) => {
       try{
            let order = await OrdersModel.find();
            res.status(200).json({msg:"list of all order" , order});
       }catch(err){
            res.status(500).json({err});
       }
}


const getOrderByStatus= async (req ,res) => {
       try{
//          let order = await OrdersModel.find({ total_amount: { $gte: 15000 } });
//          let order = await OrdersModel.find({ total_amount: { $lt: 15000 } });
//          let order = await OrdersModel.find({ total_amount: { $lte: 15000 } });
//          let order = await OrdersModel.find({ total_amount: { $eq: 15000 } });
            let order = await OrdersModel.find({ total_amount: { $ne: 15000 } });
            res.status(200).json({msg:"list of all order" , order});
       }catch(err){
            res.status(500).json({err});
       }
}


//const getOrderByStatus= async (req ,res) => {
//       try{
//            let order = await OrdersModel.find({customer_name: "Alice Johnson"});
//            res.status(200).json({msg:"list of all order" , order});
//       }catch(err){
//            res.status(500).json({err});
//       }
//}
//const getOrderByStatus= async (req ,res) => {
//       try{
//            let order = await OrdersModel.find({order_status: "shipped"});
//            res.status(200).json({msg:"list of all order" , order});
//       }catch(err){
//            res.status(500).json({err});
//       }
//}




const addNewOrder = async (req ,res) => {
         const newOrder = req.body;
          try{
             const Order = await OrdersModel.create(newOrder);
             res.status(200).json({msg:"Order is added",Order});
          }catch(err){
             res.status(500).json({msg:"priority is wrong" , err});
          }
}



const updateOrder = async (req ,res) => {
          const {id} = req.params;
          const OrderId = await OrdersModel.findById(id);


          if(!OrderId){
             res.status(406).json({msg:"Order not found"});
          }else{
             await OrdersModel.findByIdAndUpdate(id , req.body);
             res.status(201).json({msg:"Order is updated",OrderId});
          }
}






const deleteOrder = async (req ,res) => {
        try{
             const {id} = req.params;
             const DeleteOrder= await OrdersModel.findByIdAndDelete(id);
             if(!DeleteOrder){
               return res.status(500).json({msg:"DeleteOrder is not found"});
             }
             res.status(201).json({msg:"delete successfully" , DeleteOrder});
        }catch(err){
           res.status(500).json({msg:"somthing wrong"});
        }
}





module.exports = {getAllOrder , addNewOrder , updateOrder ,deleteOrder,getOrderByStatus} ;