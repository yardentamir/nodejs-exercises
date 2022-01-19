const Product = require("../models/Product");

const allProducts = () => Product.find();

const findBy = (key, value) => Product.find({ [key]: value });

const findByRange = (min, max) =>
  Product.find({ "details.price": { $gt: min, $lt: max } });

const updateToProduct = (id, body) =>
  Product.updateOne({ _id: id }, { $set: body });

module.exports = { allProducts, findBy, findByRange, updateToProduct };
