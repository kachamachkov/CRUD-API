const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from client');
});

app.post('/api/products', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json(newProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/products/:id', async (req, res) => {
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


mongoose.connect("mongodb+srv://admin:s1cBw30noRAWR09F@backenddb.8bf80.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log('Connected to the database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection to the database failed!');
  });