const client = require('./../../config/prisma-config');
class UserService {
  static async getUsers() {
    const data = await client.user.findMany();
    return data;
  }

  static async getUserByEmail(email) {
    const data = await client.user.findUnique({
      where: {
        email,
      },
    });

    return data;
  }

  static async createUser(data) {
    const user = await client.user.create({ data: data });
    return user;
  }

  static async deleteUser(id) {
    const user = await client.user.delete({
      where: {
        id: parseInt(id),
      },
    });
    return user;
  }
}

module.exports = UserService;
