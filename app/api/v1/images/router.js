const express = require('express');
const router = express();
const { create } = require('./controller');
const upload = require('../../../middlewares/multer');

const {
  authenticateUser,
  authorizeRoles,
} = require('../../../middlewares/auth');

router.post(
  '/images',
  authenticateUser,
  authorizeRoles('organizer'),
  upload.single('avatar'),
  create
);
module.exports = router;
