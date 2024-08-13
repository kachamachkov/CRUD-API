const Product = require('../models/productModel');
const router = require('express').Router();

router.post('/products', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json(newProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProductInfo = req.body;

    const product = await Product.findByIdAndUpdate(id, updatedProductInfo);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;