const router = require('express').Router();
const { CategoryController } = require('../controllers/index');
const asyncWrapper = require('../utils/async-wreapper');

router
  .route('/')
  .get(asyncWrapper(CategoryController.getCategories))
  .post(asyncWrapper(CategoryController.createCategories));

module.exports = router;