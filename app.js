const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

app.get('/', async (req, res) => {
  const data = await prisma.user.findMany();
  return res.status(200).json({
    user: data,
  });
});

app.listen(3000, () => console.log('Server listen on http://localhost:3000'));
