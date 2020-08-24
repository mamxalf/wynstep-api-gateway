require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const brandsRouter = require('./routes/brands');
const brandMediaRouter = require('./routes/brand-media');
const stuffRouter = require('./routes/stuffs');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/brands', brandsRouter);
app.use('/brand-media', brandMediaRouter);
app.use('/stuffs', stuffRouter);

module.exports = app;
