const client = require('../../config/prisma-config');
class CategoryService {
  static async getCategories() {
    const data = await client.categories.findMany({
      include: {
        products: {
          select: {
            id: true,
            name: true,
            product_code: true,
            stock: true,
            image: true,
            purchase_price: true,
            selling_price: true,
          },
        },
      },
    });
    return data;
  }

  static async createCategory(data) {
    const category = await client.categories.create({ data });
    return category;
  }

  static async updateCategory(id, data) {
    const category = await client.categories.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });

    return category;
  }

  static async deleteCategory(id) {
    const category = await client.categories.delete({
      where: {
        id: parseInt(id),
      },
    });

    return category;
  }
}

module.exports = CategoryService;
