const express = require('express');
const router = express();
const {
  signup,
  activeParticipant,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  checkout,
  getAllPayment,
} = require('./controller');

const { authenticateParticipant } = require('../../../middlewares/auth');

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activeParticipant);
router.get('/events', getAllLandingPage);
router.get('/events/:id', getDetailLandingPage);
router.get('/payments/:organizer', authenticateParticipant, getAllPayment);
router.get('/orders', authenticateParticipant, getDashboard);
router.post('/checkout', authenticateParticipant, checkout);

module.exports = router;
