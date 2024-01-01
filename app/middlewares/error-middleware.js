const { errorResponse } = require('../utils/responses');
const { CustomAPIError } = require('../utils/errors');

function errorMidlleware(err, req, res, _next) {
  if (err instanceof CustomAPIError) {
    return errorResponse(err.statusCode, res, err.message);
  }
  if (err.name === 'PrismaClientInitializationError') {
    return errorResponse(
      500,
      res,
      `Make sure your connection string (${process.env.DATABASE_URL}) is true or active`
    );
  }
  return errorResponse(500, res, 'Something when wrong');
}

module.exports = errorMidlleware;
