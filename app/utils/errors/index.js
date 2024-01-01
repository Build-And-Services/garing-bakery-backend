const BadRequestError = require('./bad-request-error');
const CustomAPIError = require('./custom-error');
const InternalServerError = require('./internal-server-error');
const NotFoundError = require('./not-found-error');
const UnAuthenticatedError = require('./unauthenticated-error');
const UnAuthorizedError = require('./unauthorized-error');

module.exports = {
  BadRequestError,
  CustomAPIError,
  InternalServerError,
  NotFoundError,
  UnAuthenticatedError,
  UnAuthorizedError,
};
