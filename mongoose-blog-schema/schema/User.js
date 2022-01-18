const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 130,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
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

userSchema.statics.isThisEmailInUse = async function (email) {
  try {
    if (!email) throw new Error("Invalid Email");
    const user = await this.findOne({ email });
    return user ? false : true;
  } catch (error) {
    console.log(
      "some error occurred in function isThisEmailInUse in user.js",
      error.message
    );
    return false;
  }
};

module.exports = mongoose.model("User", userSchema);
