require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRoutes');
const errorHandler = require('./utils/errorHandler');

//Logging middleware
app.use(morgan('dev'));

app.use('/api', apiRouter);

//Middelware built to send out error messages
app.use(errorHandler);

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
