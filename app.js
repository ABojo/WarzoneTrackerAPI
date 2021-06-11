require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRoutes');
const errorHandler = require('./utils/errorHandler');
const api = require('./utils/API');

//Logging middleware
app.use(morgan('dev'));

//Allow all CORS requests
app.use(cors());

//Add api object so its available in all further middleware
app.use((req, res, next) => {
  req.api = api;
  next();
});

app.use('/api', apiRouter);

app.use((req, res) => {
  res
    .status(404)
    .json({ status: 'error', message: 'Sorry that route does not exist!' });
});

//Middelware built to send out error messages
app.use(errorHandler);

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
