const { AuthenticationService } = require('./../services');
const { successResponse } = require('../utils/responses');
const MESSAGE_SUCCESS = require('../../config/message');
const { BadRequestError, NotFoundError } = require('../utils/errors');
const { comparePassword } = require('../helpers/bcrypt-helper');
const { StatusCodes } = require('http-status-codes');

class AuthenticationController {
  static async login(req, res) {
    const { email, password } = req.body;

    if (!email) throw new BadRequestError('Field email must be filled');
    if (!password) throw new BadRequestError('Field password must be filled');

    const data = await AuthenticationService.loginRequest(email);
    if (!data) throw new NotFoundError('Email cannot found in database');

    const compare = comparePassword(password, data.password);
    if (!compare) throw new BadRequestError('Password incorrect');

    const resData = {
      id: data.id,
      name: data.name,
      email: data.email,
      images: `${process.env.BASE_URL}/${data.image}`,
      role: data.role,
    };
    return successResponse(StatusCodes.OK, res, resData, MESSAGE_SUCCESS.auth);
  }
}

module.exports = AuthenticationController;
