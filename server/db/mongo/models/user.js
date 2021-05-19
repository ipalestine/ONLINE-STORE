const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema();

module.exports = mongoose.model('User', userSchema.add({
  name: String,
  password: String,
  roles: [String]
}));