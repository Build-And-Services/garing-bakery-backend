const { UserService } = require('./../services');
const { successResponse } = require('../utils/responses');
const { StatusCodes } = require('http-status-codes');
const MESSAGE_SUCCESS = require('../../config/message');

class UserController {
  static async getAllUsers(req, res) {
    const data = await UserService.getUsers();
    return successResponse(StatusCodes.OK, res, data, MESSAGE_SUCCESS.get);
  }
}

module.exports = UserController;
