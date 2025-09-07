const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  order_id: { type: Number, required: true },
  customer_name: { type: String ,required: true},
  items:{ type: [String],required: true},
  total_amount: { type: Number, required: true },
  order_status: { type: String ,required: true }
});

const OrdersModel = mongoose.model("Orders", OrderSchema);

module.exports = OrdersModel;