import mongoose from 'mongoose';
const { Schema, model, ObjectId } = mongoose;

// mongoose по умолчанию задает id
const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
});

export default model('User', User);
