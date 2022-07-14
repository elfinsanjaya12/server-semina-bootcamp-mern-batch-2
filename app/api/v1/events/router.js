const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');
const {
  authenticateUser,
  authorizeRoles,
} = require('../../../middlewares/auth');

router.get(
  '/events',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  index
);
router.get(
  '/events/:id',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  find
);
router.put(
  '/events/:id',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  update
);
router.delete(
  '/events/:id',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  destroy
);
router.post(
  '/events',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  create
);

module.exports = router;
