const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// router
const categoriesRouter = require('./app/api/v1/categories/router');
const imagesRouter = require('./app/api/v1/images/router');
const talentsRouter = require('./app/api/v1/talents/router');
const eventsRouter = require('./app/api/v1/events/router');
const organizersRouter = require('./app/api/v1/organizers/router');
const authCMSRouter = require('./app/api/v1/auth/router');
const ordersRouter = require('./app/api/v1/orders/router');
const participantsRouter = require('./app/api/v1/participants/router');
const paymentsRouter = require('./app/api/v1/payments/router');

const v1 = '/api/v1';

const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handler-error');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api semina',
  });
});

app.use(`${v1}/cms`, categoriesRouter);
app.use(`${v1}/cms`, imagesRouter);
app.use(`${v1}/cms`, talentsRouter);
app.use(`${v1}/cms`, eventsRouter);
app.use(`${v1}/cms`, organizersRouter);
app.use(`${v1}/cms`, authCMSRouter);
app.use(`${v1}/cms`, ordersRouter);
app.use(`${v1}/cms`, paymentsRouter);
app.use(`${v1}`, participantsRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
