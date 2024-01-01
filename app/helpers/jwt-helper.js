const jwt = require('jsonwebtoken');

function sign(payload, options) {
  const secretToken = process.env.SECRET_TOKEN;
  return jwt.sign(payload, secretToken, options);
}

function verify(token, options) {
  const secretToken = process.env.SECRET_TOKEN;
  return jwt.verify(token, secretToken, options);
}

module.exports = { sign, verify };
