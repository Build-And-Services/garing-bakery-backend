const { UserService } = require('./../services');
const { successResponse } = require('../utils/responses');
const { StatusCodes } = require('http-status-codes');
const MESSAGE_SUCCESS = require('../../config/message');
const { BadRequestError } = require('../utils/errors');

class UserController {
  static async getAllUsers(req, res) {
    const data = await UserService.getUsers();
    return successResponse(StatusCodes.OK, res, data, MESSAGE_SUCCESS.get);
  }

  static async createUser(req, res) {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      throw new BadRequestError('feild is mandatory to fill');
    }

    // email already
    const user = await UserService.getUserByEmail(email);
    if (user) {
      throw new BadRequestError('email is already to use');
    }

    const data = { email, name, password };
    await UserService.createUser(data);

    return successResponse(StatusCodes.CREATED, res, null, MESSAGE_SUCCESS.create);
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    await UserService.deleteUser(id);

    return successResponse(
      StatusCodes.NON_AUTHORITATIVE_INFORMATION,
      res,
      null,
      MESSAGE_SUCCESS.create
    );
  }
}

module.exports = UserController;
