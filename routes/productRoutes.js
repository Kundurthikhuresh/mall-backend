const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

/* Add product */
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

/* Get products by category */
router.get("/:category", async (req, res) => {
  const products = await Product.find({
    category: req.params.category,
  });
  res.json(products);
});

module.exports = router;
