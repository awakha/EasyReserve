require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
