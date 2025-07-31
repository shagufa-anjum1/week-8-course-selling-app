
const {Router} = require('express');
const { userModel } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = "14145513"

const userRouter = Router();


userRouter.post('/signup',async function(req, res){
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const hashPassword = bcrypt.hash(password, 5);


   await userModel.create({
    email,
    hashPassword,
    firstName,
    lastName
  })


    res.json({
      message: "Signup Successed"
    })
})

userRouter.post('/signin',async function(req, res) {

   const email = req.body.email;
   const password = req.body.password;

   const user = await userModel.findOne({
    email: email,
    password: password
   });

   if(user){
    const token = jwt.sign({
      id: _id
    },  JWT_USER_PASSWORD);
   }
  
  res.json({
    message: "users signin endpoint"
  })
})

userRouter.get('/users/purchases', function(req, res){
  res.json({
    message: "users purchases endpoint"
  })
})



module.exports = {
  userRouter: userRouter
}