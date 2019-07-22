const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  sign_up_date: { type: Date, default: Date.now },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;