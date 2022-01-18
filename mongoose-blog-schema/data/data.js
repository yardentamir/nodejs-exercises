const mongoose = require("mongoose");
user_id = mongoose.SchemaTypes.ObjectId;
post_id = mongoose.SchemaTypes.ObjectId;

const users = [
  {
    name: "Tamar",
    age: 20,
    email: "Tamar.gmail.com",
    blogs: [post_id],
  },
  {
    name: "Julie",
    age: 28,
    email: "Julie.gmail.com",
  },
];

const posts = [
  {
    title: "post title 1",
    text: "post text1",
    comments: [post_id],
  },
  {
    title: "post title 2",
    text: "post text2",
  },
];

const comments = [
  {
    postId: post_id,
    userId: user_id,
    text: "post text1",
  },
];

module.exports = { users, posts, comments };
