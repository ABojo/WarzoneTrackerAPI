const router = require('express').Router();
const platformRouter = require('./platformRoutes');

router.use('/platforms', platformRouter);

module.exports = router;
