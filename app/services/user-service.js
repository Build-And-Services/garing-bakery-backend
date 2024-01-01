const client = require('./../../config/prisma-config');
class UserService {
  static async getUsers() {
    const data = await client.user.findMany();
    return data;
  }
}

module.exports = UserService;
