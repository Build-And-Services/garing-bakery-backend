const client = require('./../../config/prisma-config');
class UserService {
  static async getUsers() {
    const data = await client.user.findMany();
    return data;
  }

  static async createUser(data) {
    const user = await client.user.create({ data: data });
    return user;
  }
}

module.exports = UserService;
