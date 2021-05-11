const mongoose = require('mongoose');
const Schema = mongoose.Schema

const adminSchema = new Schema({
  email: String,
  password: String,
  token: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Admin', adminSchema);
