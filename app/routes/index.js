const router = require('express').Router();
const authRouter = require('./auth');
const productsRouter = require('./products');
const categoryRouter = require('./category');

router.use('/auth', authRouter);
router.use('/products', productsRouter);
router.use('/categories', categoryRouter);

module.exports = router;
