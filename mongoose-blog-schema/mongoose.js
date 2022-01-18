const mongoose = require("mongoose");
require("dotenv").config();
const { users, posts, comments } = require("./data/data");
const User = require("./schema/User");
const Post = require("./schema/Post");
const Comment = require("./schema/Comment");

mongoose.connect(process.env.HOST.toString());

const addUser = async (user, email) => {
  try {
    const isNewUser = await User.isThisEmailInUse(email);
    if (!isNewUser) throw new Error("duplicated user");
    const newUser = await User.create(user);
    await newUser.save();
  } catch (err) {
    console.log(err.message);
  }
};

const addPosts = async (post) => {
  try {
    const posts = await Post.create(post);
    await posts.save();
  } catch (err) {
    console.log(err.message);
  }
};

const addComments = async (comment) => {
  try {
    const comments = await Comment.create(comment);
    await comments.save();
  } catch (err) {
    console.log(err.message);
  }
};

users.forEach((user) => {
  addUser(user, user.email);
});

posts.forEach((post) => {
  addPosts(post);
});

comments.forEach((comment) => {
  addComments(comment);
});
