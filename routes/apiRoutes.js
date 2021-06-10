const router = require('express').Router();
const platformRouter = require('./platformRoutes');
const matchRouter = require('./matchRoutes');

router.use('/platforms', platformRouter);
router.use('/matches', matchRouter);

module.exports = router;
