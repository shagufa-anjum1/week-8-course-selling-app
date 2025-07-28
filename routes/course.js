
const {Router} = require("express")
const courseRouter = Router();


  courseRouter.post('/purchases', function(req, res){
  res.json({
    message: "course purchases endpoint"
  })
})

courseRouter.get('/preview', function(req, res){
  res.json({
    message: "users get app course endpint"
  })
})



module.exports = {
  courseRouter: courseRouter
}