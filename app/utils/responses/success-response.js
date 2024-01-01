function successResponse(statusCode, res, data, message) {
  return res.status(statusCode).json({
    success: true,
    error: false,
    message,
    data,
  });
}

module.exports = successResponse;
