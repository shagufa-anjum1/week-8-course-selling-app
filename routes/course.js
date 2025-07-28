

function createCourseRoute(app){

  app.post('/course/purchases', function(req, res){
  res.json({
    message: "course purchases endpoint"
  })
})

app.get('/course/preview', function(req, res){
  res.json({
    message: "users get app course endpint"
  })
})

}

module.exports = {
  createCourseRoute: createCourseRoute
}