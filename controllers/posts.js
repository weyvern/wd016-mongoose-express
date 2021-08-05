import Post from '../models/Post.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

export const getSinglePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
  res.status(200).json(post);
});

export const createPost = asyncHandler(async (req, res) => {
  const { title, cover, author, body, genre } = req.body;
  if (!title || !cover || !author || !body || !genre)
    throw new ErrorResponse('All fields are required', 400);
  const newPost = await Post.create({ title, cover, author, body, genre });
  res.status(201).json(newPost);
});

export const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, cover, author, body, genre } = req.body;
  if (!title || !cover || !author || !body || !genre)
    throw new ErrorResponse('All fields are required', 400);
  const newPost = await Post.findByIdAndUpdate(
    id,
    { title, cover, author, body, genre },
    { new: true }
  );
  if (!newPost)
    throw new ErrorResponse(`Post with id of ${id} not found, therefore couldn't be updated`, 404);
  res.status(201).json(newPost);
});

export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);
  if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
  res.status(200).json({ success: `Post with id of ${id} was deleted` });
});
