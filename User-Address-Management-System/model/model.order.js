const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
      orderName :  { type: String, required: true },
      oderAmount : { type: Number, required: true },
      deliveryStatus : { type: String, required: true , default : false},
      modeOfPayment : {type:String,enum : ["UPI" , "NetBanking" ," CreditCard" ,"DebitCard"  ]},
      orderedBy: { type : mongoose.Schema.Types.ObjectId , ref:"User_Address"}
})

const orderModel = mongoose.model("orderCollection" , orderSchema);

module.exports = orderModel;