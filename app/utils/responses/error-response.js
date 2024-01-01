function errorResponse(statusCode, res, message) {
  return res.status(statusCode).json({
    success: false,
    error: true,
    message,
  });
}

module.exports = errorResponse;
