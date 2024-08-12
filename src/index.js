const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello from client');
});

app.post('/api/products', (req, res) => {
  console.log(req.body);
  res.send(req.body);
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