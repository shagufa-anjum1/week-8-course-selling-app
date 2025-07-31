const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
 
  email: {
    type: String,
    unique: true
  },
  password: String,
  firstName: String,
  lastName: String

})


const adminSchema = new Schema({
  
  password: String,
  email: String,
  firstName: String,
  lastName: String
})


const courseSchema = new Schema({
  
 title: String,
 description: String,
 price: Number,
 imageUrl: String,
 creatorId: ObjectId
})

const purchasesSchema =new Schema({
  
  courseId: ObjectId,
  userId: ObjectId
})


const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchasesModel = mongoose.model("purchases", purchasesSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchasesModel
}