const router = require('express').Router();
const { AuthenticationController } = require('../controllers/index');
const asyncWrapper = require('../utils/async-wreapper');

router.route('/').post(asyncWrapper(AuthenticationController.login));

module.exports = router;
