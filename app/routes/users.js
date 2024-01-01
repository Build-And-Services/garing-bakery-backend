const router = require('express').Router();
const { UserController } = require('../controllers/index');
const asyncWrapper = require('../utils/async-wreapper');

router
  .route('/')
  .get(asyncWrapper(UserController.getAllUsers))
  .post(asyncWrapper(UserController.createUser));

module.exports = router;
