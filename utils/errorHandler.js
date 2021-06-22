const errorHandler = (err, req, res, next) => {
  console.log(err);
  const message = err.message.includes('.login()')
    ? 'Sorry, this is a test app so our free server is waking up! Please resubmit the username to get the data.'
    : err.message;

  res.json({
    status: 'error',
    message,
  });
};

module.exports = errorHandler;
