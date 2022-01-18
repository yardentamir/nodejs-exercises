const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect(
  "mongodb+srv://yardentamir:Yar135468729@cluster0.thsz6.mongodb.net/blogSchema"
);

const run = async () => {
  const user = new User({ name: "Kyle", age: 26 });
  await user.save();
};
