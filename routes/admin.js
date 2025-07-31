const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require('../db');
const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD = "1234567890"

adminRouter.post('/signup', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

   await adminModel.create({
    email,
    password,
    firstName,
    lastName
  });

   res.json({
    message: "signup endpoint in admin router"
   })
})


adminRouter.post('/signin', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

   const user = await adminModel.findOne({
    email,
    password
  },);

  if(user){
    const token = JsonWebTokenError.sign({
    id: _di
    }, JWT_ADMIN_PASSWORD)
  }
  res.json({
    message: "signin endpint in admin router"
  })
})

adminRouter.post('/', function(req, res){
  res.json({
    message: "course router in admin endpoint"
  })
})

adminRouter.put('/bluk', function(req, res){
  res.json({
    message: "update router in admin endpoint"
  })
})

adminRouter.get('/preview', function(req, res){
  res.json({
    message: "get endpoint in admin router"
  })
})

module.exports = {
  adminRouter: adminRouter
}