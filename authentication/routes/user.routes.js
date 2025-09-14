const express = require("express");
const userRoutes = express.Router();
const userModel = require("../model/user.model");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;




// Signup
userRoutes.post("/signup", async (req, res) => {
  try {
    const { username, email, password,role } = req.body;

    // Hash password
    const hash = await bcrypt.hash(password, saltRounds);
    await userModel.create({ username,  email, password: hash , role});
    res.status(200).json({ msg: "Signup success" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong in signup" });
  }
});







//// Login
userRoutes.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;

       const user = await userModel.findOne({ email });
        if (!user) {
          return res.status(404).json({ msg: "User not found" });
        }
         const isMatch = await bcrypt.compare(password, user.password);
         var token = jwt.sign({ userId: user._id ,role : user.role }, 'shhhhh');

         console.log(token )
        if (!isMatch) {
          return res.status(401).json({ msg: "Invalid credentials" });
        }

    res.status(200).json({ msg: "Login success", user , token});
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong in login" });
  }
});






module.exports = { userRoutes };
