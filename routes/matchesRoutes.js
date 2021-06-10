const router = require('express').Router();
const matchesController = require('../controllers/matchesController');
const authController = require('../controllers/authController');

router.get(
  '/:platform/:username',
  authController.isLoggedIn,
  matchesController.getMatches
);

module.exports = router;
