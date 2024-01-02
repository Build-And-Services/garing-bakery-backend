const { StatusCodes } = require('http-status-codes');
const { CategoryService } = require('../services');
const { successResponse } = require('../utils/responses');
const MESSAGE_SUCCESS = require('../../config/message');
const { BadRequestError } = require('../utils/errors');

class CategoryController {
  static async getCategories(req, res) {
    const data = await CategoryService.getCategories();
    return successResponse(StatusCodes.OK, res, data, MESSAGE_SUCCESS.get);
  }

  static async createCategories(req, res) {
    const { name } = req.body;
    if (!name) {
      throw new BadRequestError('All fields are required!');
    }
    await CategoryService.createCategory({ name });
    return successResponse(StatusCodes.CREATED, res, null, MESSAGE_SUCCESS.create);
  }
}

module.exports = CategoryController;
