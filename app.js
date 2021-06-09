require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const app = express();

//Logging middleware
app.use(morgan('dev'));

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
