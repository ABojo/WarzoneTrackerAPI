const router = require('express').Router();
const matchController = require('../controllers/matchController');

router.get('/:id', matchController.getMatch);

module.exports = router;
