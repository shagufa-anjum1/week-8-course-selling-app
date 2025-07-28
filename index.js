const express = require('express');

const app = express();

app.post('/users/signup', function(req, res){
    res.json({
      message: "users signup endpoint"
    })
})

app.post('users/signin', function(req, res) {
  res.json({
    message: "users signin endpoint"
  })
})

app.get('users/purchases', function(req, res){
  res.json({
    message: "users purchases endpoint"
  })
})

app.post('course/purchases', function(req, res){
  res.json({
    message: "course purchases endpoint"
  })
})

app.get('/users/getCourse', function(req, res){
  res.json({
    message: "users get app course endpint"
  })
})

app.listen(3000);