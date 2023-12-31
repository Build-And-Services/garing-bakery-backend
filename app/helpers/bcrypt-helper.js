const bcrypt = require('bcrypt');

function hashPassword(pasword) {
  const salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync(pasword, salt);
}

function comparePassword(password, encryptedPassword) {
  return bcrypt.compareSync(password, encryptedPassword);
}

module.exports = { hashPassword, comparePassword };
