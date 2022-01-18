const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
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
  blog: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("Comment", commentSchema);
