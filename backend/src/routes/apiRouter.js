const apiRouter = require('express').Router();

const adminRouter = require('./adminRouter');
const indexRouter = require('./indexRouter');
const mapRouter = require('./mapRouter');
const restRouter = require('./restRouter');
const userRouter = require('./userRouter');
const bookingRouter = require('./bookingRouter');
const favesRouter = require('./favesRouter');
const profileRouter = require('./profileRouter');

apiRouter.use('/user', userRouter);
apiRouter.use('/admin', adminRouter);
apiRouter.use('/map', mapRouter);
apiRouter.use('/restaurants', restRouter);
apiRouter.use('/booking', bookingRouter);
apiRouter.use('/faves', favesRouter);
apiRouter.use('/', indexRouter);
apiRouter.use('/profile', profileRouter);

module.exports = apiRouter;
