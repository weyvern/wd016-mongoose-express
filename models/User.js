import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  created: { type: String, default: Date.now }
});

const User = model('User', userSchema);

export default User;
