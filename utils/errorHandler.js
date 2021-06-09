const errorHandler = (err, req, res, next) => {
  res.json({
    status: 'error',
    message: 'Sorry, there was a problem getting the data you requested!',
  });
};

module.exports = errorHandler;
