const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("Post", postSchema);
