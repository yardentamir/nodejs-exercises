const Product = require("../models/Product");
const {
  allProducts,
  findBy,
  findByRange,
  updateToProduct,
} = require("./utils");

const loadProducts = async (req, res) => {
  try {
    const products = await allProducts();
    res.status(201).send(products);
  } catch (e) {
    res.status(500).send(e);
  }
};

const addProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};

const loadProductByKey = async (req, res) => {
  const { key, value } = req.body;

  try {
    const product = await findBy(key, value);

    if (!product) {
      return res.status(404).send("There is no such products");
    }

    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

const loadActiveProducts = async (req, res) => {
  try {
    const product = await findBy("isActive", true);

    if (product.length === 0) {
      return res.status(404).send("There is no such products");
    }

    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

const loadProductsByPriceRange = async (req, res) => {
  try {
    const { min, max } = req.body;
    const product = await findByRange(min, max);

    if (product.length === 0) {
      return res.status(404).send("There is no such products");
    }

    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteProducts = async (req, res) => {
  try {
    const product = await Product.remove();

    if (product.length === 0) {
      return res.status(404).send("There is no such products");
    }

    res.send("deleted successfully");
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndRemove(id);

    if (product.length === 0) {
      return res.status(404).send("There is no such products");
    }

    res.send("deleted successfully");
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updateAnswer = await updateToProduct(id, body);

    if (updateAnswer.length === 0) {
      return res.status(404).send("There is no such products");
    }

    const product = await Product.findById(id);
    await product.save();
    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  loadProducts,
  addProduct,
  loadProductByKey,
  loadActiveProducts,
  loadProductsByPriceRange,
  deleteProducts,
  deleteProduct,
  updateProduct,
};
