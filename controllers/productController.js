const Product = require("../models/productModel.js");

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send("error");
  }
};

const getProductbyID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send("error");
  }
};

const updateProductbyID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).send("error");
    }
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).send("error");
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send("error");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).send("product not found");
    }

    res.status(200).json("product deleted successfully");
  } catch (error) {
    res.status(404).send("error");
  }
};
module.exports = {
  getProduct,
  getProductbyID,
  updateProductbyID,
  addProduct,
  deleteProduct,
};
