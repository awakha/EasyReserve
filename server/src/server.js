require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

// routes import

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// routes

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
