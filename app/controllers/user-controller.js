const { UserService } = require('./../services');
const { successResponse } = require('../utils/responses');
const { StatusCodes } = require('http-status-codes');
const MESSAGE_SUCCESS = require('../../config/message');

class UserController {
  static async getAllUsers(req, res) {
    const data = await UserService.getUsers();
    return successResponse(StatusCodes.OK, res, data, MESSAGE_SUCCESS.get);
  }

  static async createUser(req, res) {
    const { email, name, password } = req.body;
    const data = { email, name, password };
    await UserService.createUser(data);
    return successResponse(StatusCodes.CREATED, res, null, MESSAGE_SUCCESS.create);
  }
}

module.exports = UserController;
