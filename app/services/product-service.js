const client = require('./../../config/prisma-config');
class ProductService {
  static async getProducts() {
    const data = await client.products.findMany();
    return data;
  }

  static async createProduct(data) {
    const product = await client.products.create({ data });
    return product;
  }

  static async updateProduct(id, data) {
    const product = await client.products.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });

    return product;
  }

  static async deleteProduct(id) {
    const product = await client.products.delete({
      where: {
        id: parseInt(id),
      },
    });

    return product;
  }
}

module.exports = ProductService;
