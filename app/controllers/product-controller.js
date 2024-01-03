const { StatusCodes } = require('http-status-codes');
const { ProductService } = require('../services');
const { successResponse } = require('../utils/responses');
const MESSAGE_SUCCESS = require('../../config/message');
const { BadRequestError } = require('../utils/errors');

class ProductController {
  static async getProducts(req, res) {
    const data = await ProductService.getProducts();
    return successResponse(StatusCodes.OK, res, data, MESSAGE_SUCCESS.get);
  }

  static async getProductById(req, res) {
    const id = req.params.id;
    const data = await ProductService.getProductById(id);
    return successResponse(StatusCodes.OK, res, data, MESSAGE_SUCCESS.get);
  }

  static async createProduct(req, res) {
    const { name, image, stock, product_code, purchase_price, selling_price, category_id } =
      req.body;

    if (
      !name ||
      !image ||
      !stock ||
      !product_code ||
      !purchase_price ||
      !selling_price ||
      !category_id
    ) {
      throw new BadRequestError('All fields are required!');
    }

    const data = req.body;
    await ProductService.createProduct(data);
    return successResponse(StatusCodes.CREATED, res, null, MESSAGE_SUCCESS.create);
  }

  static async updateProduct(req, res) {
    const { name, image, stock, product_code, purchase_price, selling_price, category_id } =
      req.body;

    if (
      !name ||
      !image ||
      !stock ||
      !product_code ||
      !purchase_price ||
      !selling_price ||
      !category_id
    ) {
      throw new BadRequestError('All fields are required!');
    }

    const id = req.params.id;
    const data = req.body;

    await ProductService.updateProduct(id, data);
    return successResponse(StatusCodes.ACCEPTED, res, null, MESSAGE_SUCCESS.update);
  }

  static async deleteProduct(req, res) {
    const id = req.params.id;
    await ProductService.deleteProduct(id);
    return successResponse(
      StatusCodes.NON_AUTHORITATIVE_INFORMATION,
      res,
      null,
      MESSAGE_SUCCESS.remove
    );
  }
}

module.exports = ProductController;
