
const {Router} = require('express');

const userRouter = Router();

userRouter.post('/users/signup', function(req, res){
    res.json({
      message: "users signup endpoint"
    })
})

userRouter.post('/users/signin', function(req, res) {
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