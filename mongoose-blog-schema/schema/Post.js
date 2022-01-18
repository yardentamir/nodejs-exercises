const mongoose = require("mongoose");
const { commentSchema } = require("./Comment");

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  comment: [commentSchema],
});

module.exports = mongoose.model("Post", postSchema);
