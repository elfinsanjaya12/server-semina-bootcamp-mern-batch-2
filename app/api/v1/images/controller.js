// import services images
const { createImages } = require('../../../services/mongoose/images');

const { StatusCodes } = require('http-status-codes');

const create = async (req, res) => {
  try {
    const result = await createImages(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { create };
