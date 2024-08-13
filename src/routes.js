const router = require('express').Router();
const productController = require('./controllers/productController');

router.use('/api', productController);

module.exports = router;
