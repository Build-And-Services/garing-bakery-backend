const router = require('express').Router();
const authRouter = require('./auth');
const productsRouter = require('./products');

router.use('/auth', authRouter);
router.use('/products', productsRouter);

module.exports = router;
