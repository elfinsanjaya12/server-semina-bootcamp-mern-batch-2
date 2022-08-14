const { StatusCodes } = require('http-status-codes');
const {
  getUserRefreshToken,
} = require('../../../services/mongoose/refreshToken');

const index = async (req, res, next) => {
  try {
    const result = await getUserRefreshToken(req);

    res.status(StatusCodes.OK).json({
      data: { token: result },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { index };
