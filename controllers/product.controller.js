const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(500).json({ msg: "Product not Found" });
    }
    const updatedProduct = await Product.findById(id);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not Found" });
    }
    // const updatedProduct = await Product.findById(id);
    return res.status(200).json({ msg: "Product Successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProduct,
};
