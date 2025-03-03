const apiRouter = require('express').Router();

const authMiddleware = require('../middleware/auth-middleware');

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
apiRouter.use('/booking', authMiddleware, bookingRouter);
apiRouter.use('/faves', authMiddleware, favesRouter);
apiRouter.use('/profile', authMiddleware, profileRouter);
apiRouter.use('/', indexRouter);

module.exports = apiRouter;
