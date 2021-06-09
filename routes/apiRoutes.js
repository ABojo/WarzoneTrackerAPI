const router = require('express').Router();
const statsRouter = require('./statsRoutes');
const matchesRouter = require('./matchesRoutes');

router.use('/stats', statsRouter);
router.use('/matches', matchesRouter);

module.exports = router;
