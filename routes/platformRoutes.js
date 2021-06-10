const router = require('express').Router();
const platformController = require('../controllers/platformController');
const authController = require('../controllers/authController');

router.get(
  '/:platform/usernames/:username',
  authController.isLoggedIn,
  platformController.getPlayer
);

module.exports = router;
