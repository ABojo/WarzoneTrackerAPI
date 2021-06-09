const router = require('express').Router();
const statsController = require('../controllers/statsController');

router.get('/:platform/:username', statsController.getStats);

module.exports = router;
