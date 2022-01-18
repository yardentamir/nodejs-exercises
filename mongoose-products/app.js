const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./schema/Product");
const { products } = require("./data/data");

mongoose.connect(process.env.LOCALHOST);

const addProduct = async (product) => {
  try {
    const newProduct = await Product.create(product);
    await newProduct.save();
  } catch (err) {
    console.log(err.message);
  }
};

products.forEach((product) => {
  addProduct(product);
});

console.log("hi hi");
