const mongoose = require("mongoose");



const addressSchema = new mongoose.Schema({
       street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true, default: "India" },
      pincode: { type: Number, required: true }
})


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  addresses: [addressSchema]
});



const UserModel = mongoose.model("User_Address", UserSchema);

module.exports = UserModel;
