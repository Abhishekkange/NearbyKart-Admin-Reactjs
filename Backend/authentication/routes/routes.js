const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const { otpgeneration, OTP } = require('../middleware/sendotp');


// Define authentication-related routes


Router.post("/register",async (req,res)=>{

    try {

    //check if user already exists of not
    const myUser = await User.findOne({mobileNumber:{$eq:req.body.mobileNumber}});
    if(myUser){

        res.json({"message":"The user already exists ! Please sign in to continue"});
    }
    else{

        
        const mobile = req.body.mobileNumber;
        const name = req.body.name;
        const password = req.body.password;

        bcrypt.hash(password, saltRounds, async function(err, hash) {

            const newUser = new User({
            
                "name":name,
                "mobileNumber":mobile,
                "password":hash
            });

            //generation OTP for verification
            otpgeneration(req,res);
            
            res.json({"message":"verifyotp"});
            console.log(OTP);

            // await newUser.save();
            // res.send("User created")
            
        });
    }}
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

Router.post("/login",async (req,res)=>{

        
  const isUserPresent = await User.findOne({mobileNumber:req.body.mobileNumber});
  if(isUserPresent){

      bcrypt.compare(req.body.password, isUserPresent.password).then(function(result) {
          if(result==true){

              let data = {
                  time: Date(),
                  username:isUserPresent.name,
                  userId: isUserPresent._id
              }

              
            
              const token = jwt.sign(data, "abhi");
            
              res.json({"message":token});
          }else{

              res.json({"message":"enter valid credentials"});
          }
      });
  }
  else{

      res.json({"mesage":"Not registered user"});

  }

});


// Router 3: localhost:4000/api/getuser
Router.post('/getUser', fetchUser, async (req, res) => {
  try {
     
      console.log({userId:req.user.userId});

      res.send("ok");
  } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
  }
});


module.exports = Router;
