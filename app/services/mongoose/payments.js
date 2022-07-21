const Payments = require('../../api/v1/payments/model');
const { checkingImage } = require('./images');

const { NotFoundError, BadRequestError } = require('../../errors');

const getAllPayments = async (req) => {
  let condition = { organizer: req.user.organizer };

  const result = await Payments.find(condition)
    .populate({
      path: 'image',
      select: '_id name',
    })
    .select('_id type status image');

  return result;
};

const createPayments = async (req) => {
  const { type, image } = req.body;

  await checkingImage(image);

  const check = await Payments.findOne({ type, organizer: req.user.organizer });

  if (check) throw new BadRequestError('Tipe pembayaran duplikat');

  const result = await Payments.create({
    image,
    type,
    organizer: req.user.organizer,
  });

  return result;
};

const getOnePayments = async (req) => {
  const { id } = req.params;

  const result = await Payments.findOne({
    _id: id,
    organizer: req.user.organizer,
  })
    .populate({
      path: 'image',
      select: '_id name',
    })
    .select('_id type status image');

  if (!result)
    throw new NotFoundError(`Tidak ada tipe pembayaran dengan id :  ${id}`);

  return result;
};

const updatePayments = async (req) => {
  const { id } = req.params;
  const { type, image } = req.body;

  await checkingImage(image);

  const check = await Payments.findOne({
    type,
    organizer: req.user.organizer,
    _id: { $ne: id },
  });

  if (check) throw new BadRequestError('Tipe pembayaran duplikat');

  const result = await Payments.findOneAndUpdate(
    { _id: id },
    { type, image, organizer: req.user.organizer },
    { new: true, runValidators: true }
  );

  if (!result)
    throw new NotFoundError(`Tidak ada tipe pembayaran dengan id :  ${id}`);

  return result;
};

const deletePayments = async (req) => {
  const { id } = req.params;

  const result = await Payments.findOne({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result)
    throw new NotFoundError(`Tidak ada tipe pembayaran dengan id :  ${id}`);

  await result.remove();

  return result;
};

const checkingPayments = async (id) => {
  const result = await Payments.findOne({ _id: id });

  if (!result)
    throw new NotFoundError(`Tidak ada tipe pembayaran dengan id :  ${id}`);

  return result;
};

module.exports = {
  getAllPayments,
  createPayments,
  getOnePayments,
  updatePayments,
  deletePayments,
  checkingPayments,
};
