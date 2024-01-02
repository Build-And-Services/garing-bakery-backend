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
