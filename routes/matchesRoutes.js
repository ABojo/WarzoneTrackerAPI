const router = require('express').Router();
const matchesController = require('../controllers/matchesController');

router.get('/:platform/:username', matchesController.getMatches);

module.exports = router;
