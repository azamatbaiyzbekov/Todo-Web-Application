const mongoose = require('mongoose');
const Schema = mongoose.Schema, 
ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  user_id: { type: ObjectId },
  sign_up_date: { type: Date, default: Date.now },

  // reference
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'List',
    }
  ]
});


const User = mongoose.model('User', UserSchema);

module.exports = User;