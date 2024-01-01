const { errorResponse } = require('../utils/responses');
const { CustomAPIError } = require('../utils/errors');

function errorMidlleware(err, req, res) {
  if (err instanceof CustomAPIError) {
    return errorResponse(err.statusCode, res, err.message);
  }
  return errorResponse(500, res, 'Something when wrong');
}

module.exports = errorMidlleware;
