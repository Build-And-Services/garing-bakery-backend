const router = require('express').Router();
const { ProductController } = require('../controllers/index');
const asyncWrapper = require('../utils/async-wreapper');

router
  .route('/')
  .get(asyncWrapper(ProductController.getProducts))
  .post(asyncWrapper(ProductController.createProduct));

router
  .route('/:id')
  .get(asyncWrapper(ProductController.getProductById))
  .put(asyncWrapper(ProductController.updateProduct))
  .delete(asyncWrapper(ProductController.deleteProduct));

module.exports = router;
