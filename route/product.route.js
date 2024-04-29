const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProduct);

module.exports = router;
