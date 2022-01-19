const express = require("express");
const rootRouter = express.Router();
const {
  loadProducts,
  addProduct,
  loadProductByKey,
  loadActiveProducts,
  loadProductsByPriceRange,
  deleteProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");

rootRouter.get("/loadProducts", loadProducts);

rootRouter.get("/loadProductByKey", loadProductByKey);

rootRouter.get("/loadActiveProducts", loadActiveProducts);

rootRouter.get("/loadProductsByPriceRange", loadProductsByPriceRange);

rootRouter.post("/addProduct", addProduct);

rootRouter.delete("/deleteProducts", deleteProducts);

rootRouter.delete("/deleteProduct/:id", deleteProduct);

rootRouter.put("/updateProduct/:id", updateProduct);

module.exports = rootRouter;
