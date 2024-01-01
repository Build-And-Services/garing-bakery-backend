const jwt = require('jsonwebtoken');
const UnAuthenticatedError = require('../utils/errors');
const asyncWrapper = require('../utils/async-wreapper');

const authMiddleWare = asyncWrapper(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];

  const payload = jwt.verify(token, process.env.JWT_SECRET);
  req.user = { userId: payload.userId };
  next();
});

module.exports = authMiddleWare;
