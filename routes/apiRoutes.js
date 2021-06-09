const router = require('express').Router();
const statsRouter = require('./statsRoutes');
const matchesRouter = require('./matchesRoutes');

router.get('/stats', statsRouter);
router.get('/matches', matchesRouter);

module.exports = router;
