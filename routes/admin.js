const {Router} = require('express');
const { memo } = require('react');
const adminRouter = Router();

adminRouter.post('/signup', function(req, res) {
   res.json({
    message: "signup endpoint in admin router"
   })
})


adminRouter.post('/signin', function(req, res) {
  res.json({
    message: "signin endpint in admin router"
  })
})

adminRouter.post('/course', function(req, res){
  res.json({
    message: "course router in admin endpoint"
  })
})

adminRouter.put('/course', function(req, res){
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