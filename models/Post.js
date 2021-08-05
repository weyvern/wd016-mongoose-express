import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  genre: { type: String, required: true, enum: ['travel', 'fashion', 'health', 'culture'] },
  date: { type: String, default: Date.now }
});

const Post = model('Post', postSchema);

export default Post;
