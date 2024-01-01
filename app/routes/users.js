const router = require('express').Router();
const { UserController } = require('../controllers/index');
const asyncWrapper = require('../utils/async-wreapper');

router.route('/').get(asyncWrapper(UserController.getAllUsers));

module.exports = router;
