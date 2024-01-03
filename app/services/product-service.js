const { BadRequestError } = require('../utils/errors');
const client = require('./../../config/prisma-config');
class ProductService {
  static async getProducts() {
    const products = await client.products.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        product_code: true,
        purchase_price: true,
        selling_price: true,
        stock: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    const productsFormatted = products.map((product) => ({
      ...product,
      category: product.category ? product.category.name : null,
    }));

    return productsFormatted;
  }

  static async getProductById(id) {
    const product = await client.products.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        name: true,
        image: true,
        product_code: true,
        purchase_price: true,
        selling_price: true,
        stock: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!product) {
      throw new BadRequestError('The product_id does not exist.');
    }

    const formattedProduct = {
      ...product,
      category: product.category ? product.category.name : null,
    };

    return formattedProduct;
  }

  static async createProduct(data) {
    const category = await client.categories.findUnique({
      where: {
        id: data.category_id,
      },
    });

    if (!category) {
      throw new BadRequestError('The category_id is not match to any categories.');
    }

    const product = await client.products.create({ data });
    return product;
  }

  static async updateProduct(id, data) {
    const product = await client.products.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!product) {
      throw new BadRequestError('The product_id does not exist.');
    }

    const category = await client.categories.findUnique({
      where: {
        id: data.category_id,
      },
    });

    if (!category) {
      throw new BadRequestError('The category_id is not match to any categories.');
    }

    const updatedProduct = await client.products.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });

    return updatedProduct;
  }

  static async deleteProduct(id) {
    const product = await client.products.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!product) {
      throw new BadRequestError('The product_id does not exist.');
    }

    const deletedProduct = await client.products.delete({
      where: {
        id: parseInt(id),
      },
    });

    return deletedProduct;
  }
}

module.exports = ProductService;
