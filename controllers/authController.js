const catchAsync = require('../utils/catchAsync');

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  if (req.api.isLoggedIn === false)
    throw new Error(
      'Sorry, we are unable to process your request at the moment!'
    );

  next();
});
