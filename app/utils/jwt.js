const jwt = require('jsonwebtoken');
const {
  jwtSecret,
  jwtExpiration,
  jwtRefreshTokenSecret,
  jwtRefreshTokenExpiration,
} = require('../config');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: jwtExpiration,
  });
  return token;
};
const createRefreshJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtRefreshTokenSecret, {
    expiresIn: jwtRefreshTokenExpiration,
  });
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);

module.exports = {
  createJWT,
  isTokenValid,
  createRefreshJWT,
};
