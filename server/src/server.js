require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

// routes import
const authRouter = require('./routes/authRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
