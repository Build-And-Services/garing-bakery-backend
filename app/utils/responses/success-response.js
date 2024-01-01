function successResponse(statusCode, res, data, message) {
  return res.status(statusCode).json({
    message,
    success: true,
    data,
  });
}

module.exports = successResponse;
