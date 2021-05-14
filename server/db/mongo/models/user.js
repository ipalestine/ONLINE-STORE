const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema();

module.exports = mongoose.model('User', userSchema.add({
  username: String,
  password: String,
  token: String,
  email: String,
  phone_number: String,
  name: String,
  family: String,
  birthday: Date,
  age: Number,
  gender: String,
  created_at: {
    type: Date, default: Date.now()
  },
  updated_at: {
    type: Date, default: Date.now()
  }
}));