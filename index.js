const express = require('express');

const {userRouter} = require('./routes/user');
const {createCourseRoute} = require('./routes/course');

const app = express();

userRouter(app);
createCourseRoute(app);





app.listen(3000);