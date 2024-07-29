const express = require("express");
const router = express.Router();
const Product = require("../models/productModel.js");

const {
  getProduct,
  getProductbyID,
  updateProductbyID,
  addProduct,
  deleteProduct,
} = require("../controllers/productController.js");

//show all product
router.get("/products", getProduct);
//show  product by id
router.get("/product/:id", getProductbyID);
//update product
router.put("/product/:id", updateProductbyID);
// add product
router.post("/products", addProduct);

//delete product
router.delete("/product/:id", deleteProduct);

module.exports = router;
