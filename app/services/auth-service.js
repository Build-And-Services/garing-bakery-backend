const client = require('./../../config/prisma-config');

class AuthenticationService {
  static async loginRequest(email) {
    const user = await client.users.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        password: true,
        email: true,
        image: true,
        role: true,
      },
    });
    return user;
  }
}

module.exports = AuthenticationService;
