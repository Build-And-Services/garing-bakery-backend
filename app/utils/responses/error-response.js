function errorResponse(statusCode, res, message) {
  return res.status(statusCode).json({
    message,
    success: false,
  });
}

module.exports = errorResponse;
