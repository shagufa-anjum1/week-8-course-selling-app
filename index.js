const express = require('express');
const mongoose = require('mongoose');
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);






async function main(){
await mongoose.connect('mongodb+srv://Shagufa:Shagufa%408877@todo-app.47md6zs.mongodb.net/test3');
console.log("listing on port number 3000");
app.listen(3000);
}

main();