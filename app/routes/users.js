const router = require('express').Router();
const { UserController } = require('../controllers/index');
const asyncWrapper = require('../utils/async-wreapper');

router
  .route('/')
  .get(asyncWrapper(UserController.getAllUsers))
  .post(asyncWrapper(UserController.createUser));

// /api/v1/user/2

router
  .route('/:id')
  .put(asyncWrapper(UserController.updateUser))
  .delete(asyncWrapper(UserController.deleteUser));
module.exports = router;
