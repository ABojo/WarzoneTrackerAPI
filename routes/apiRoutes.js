const router = require('express').Router();
const statsRouter = require('./statsRoutes');
const matchesRouter = require('./matchesRoutes');
const platformRouter = require('./platformRoutes');

router.use('/stats', statsRouter);
router.use('/matches', matchesRouter);
router.use('/platforms', platformRouter);

module.exports = router;
