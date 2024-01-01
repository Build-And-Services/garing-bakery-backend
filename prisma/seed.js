const client = require('./../config/prisma-config');
const { Role } = require('@prisma/client');
const { hashPassword } = require('./../app/helpers/bcrypt-helper');

async function main() {
  await Promise.all([
    client.users.upsert({
      where: { email: 'owner@gmail.com' },
      create: {
        email: 'owner@email.com',
        name: 'owner',
        image: 'profile.jgp',
        password: hashPassword('password'),
        role: Role.OWNER,
      },
      update: {
        role: Role.OWNER,
      },
    }),
    client.users.upsert({
      where: { email: 'admin@gmail.com' },
      create: {
        email: 'admin@gmail.com',
        name: 'admin',
        image: 'profile.jgp',
        password: hashPassword('password'),
        role: Role.ADMIN_HOUSE,
      },
      update: {
        role: Role.ADMIN_HOUSE,
      },
    }),
    client.users.upsert({
      where: { email: 'cashier@gmail.com' },
      create: {
        email: 'cashier@gmail.com',
        name: 'cashier',
        image: 'profile.jgp',
        password: hashPassword('password'),
        role: Role.CASHIER,
      },
      update: { role: Role.CASHIER },
    }),
  ]);
}

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await client.$disconnect();
    process.exit(1);
  });
