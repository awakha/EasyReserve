require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middleware/error-middleware');

const apiRouter = require('./routes/apiRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cookieParser());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use('/api', apiRouter);
app.use('/user', userRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
