const mongoose = require("mongoose");
const Product = require("./schema/Product");
const { products } = require("./data/data");

mongoose.connect("mongodb://127.0.0.1:27017/products");

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
