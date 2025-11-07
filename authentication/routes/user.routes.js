const express = require("express");
const userRoutes = express.Router();
const userModel = require("../model/user.model");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config()
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const nodemailer = require("nodemailer");





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
         var token = jwt.sign({ userId: user._id ,role : user.role }, 'shhhhh',{ expiresIn: 100000000  } );


        if (!isMatch) {
          return res.status(401).json({ msg: "Invalid credentials" });
        }

    res.status(200).json({ msg: "Login success", user , token});
  } catch (err) {

    res.status(500).json({ msg: "Something went wrong in login" });
  }
});





//github OAuth
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
      return done(profile);
  }
));



//call the github login/authorization page

userRoutes.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));


//call back routes in case of login success or failure
userRoutes.get('/auth/github/callback',
  passport.authenticate('github', { session : false ,failureRedirect: '/login' }),
  async function  (req, res) {
    // Successful authentication, redirect home.
    //res.redirect('/');
    const gitHubUserId = req.user.id;
    const user = await userModel.find({profileId : gitHubUserId })
    console.log(user)
    if(user.length == 0){
       let newUser = await userModel.create({profileId : gitHubUserId})
       var token = jwt.sign({ userId: newUser._id ,role : newUser .role }, 'shhhhh');
       res.json({ msg: "github Login success" , token});
    }else{
       var token = jwt.sign({ userId: user._id ,role : user.role }, 'shhhhh');
    }


  });


//send email

const transporter = nodemailer.createTransport({
//  host: "smtp.ethereal.email",
//  port: 587,
//  secure: false, // true for 465, false for other ports
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_APP_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});


userRoutes.get("/sendEmail" , async (req, res) =>{
         const info = await transporter.sendMail({
             from: '"kiran kasana" <${process.env.GOOGLE_APP_EMAIL}>',
             to: "kkasanacoder@gmail.com",
             subject: "this is email sender",
             text: "Hello world?", // plain‑text body
             html: "<b>Hello world?</b>", // HTML body
           });

           console.log(info)

           res.status(201).json({message : "email sent"})
})







// forget password
userRoutes.post("/forget-password" , async(req ,res) => {

        try{
          const {email} = req.body;
          let user = await userModel.findOne({email})

          if(!user){
            res.status(404).json({message : "user not found"})
          }else{
              let resetToken = jwt.sign({ userId: user._id  }, process.env.JWT_SECRET_KEY,{ expiresIn: 120000000});
              let resetPasswordLink = `http://localhost:8080/userRoutes/reset-password?token=${resetToken}`
              res.status(200).json({message : "reset password link sent to the register email" ,  resetPasswordLink })

              const info = await transporter.sendMail({
                           from: '"kiran kasana" <${process.env.GOOGLE_APP_EMAIL}>',
                           to: user.email,
                           subject: "password reset link",
                           html: `<p>dear ${user.username} here is password reset link please find your mail </p>
                                  <h3>${resetPasswordLink}</h3>`,
                         });
          }

        }catch(err){
          res.status(500).json({message : "something went wrong , please try again later"})
        }
})




userRoutes.post("/reset-password" , async(req ,res) => {
      const {token} = req.query;
       const {newPassword} = req.body;

       if (!token) {
          return res.status(400).json({ message: "Token is required" });
       }


      try{
           const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
           if(decoded){
              let user = await userModel.findById(decoded.userId);
              console.log(user)

                const hash = await bcrypt.hash(newPassword, saltRounds);
                user.password = hash;
                await user.save();

              res.status(200).json({message : "password reset successfully"})
           }
      }
      catch(err){
           res.status(500).json({message : "something went wrong , please try again later"})
      }


//      res.json({mess : token })
})



module.exports = { userRoutes };
