const router = require('express').Router();
const statsController = require('../controllers/statsController');
const authController = require('../controllers/authController');

router.get(
  '/:platform/:username',
  authController.isLoggedIn,
  statsController.getStats
);

module.exports = router;
