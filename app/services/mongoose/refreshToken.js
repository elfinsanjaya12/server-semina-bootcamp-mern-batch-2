const UserRefreshToken = require('../../api/v1/userRefreshToken/model');
const { isTokenValid, createJWT, createTokenUser } = require('../../utils');
const Users = require('../../api/v1/users/model');

const createUserRefreshToken = async (payload) => {
  const result = await UserRefreshToken.create(payload);

  return result;
};

const getUserRefreshToken = async (req) => {
  const { refreshToken } = req.body;
  const result = await UserRefreshToken.findOne({
    refreshToken,
  });

  const payload = isTokenValid({ token: result.refreshToken });

  const userCheck = await Users.findOne({ email: payload.email });

  const token = createJWT({ payload: createTokenUser(userCheck) });

  return token;
};

module.exports = { createUserRefreshToken, getUserRefreshToken };
