require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRoutes');
const errorHandler = require('./utils/errorHandler');
const api = require('./utils/API');

//Logging middleware
app.use(morgan('dev'));

//Add api object so its available in all further middleware
app.use((req, res, next) => {
  req.api = api;
  next();
});

app.use('/api', apiRouter);

//Middelware built to send out error messages
app.use(errorHandler);

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
