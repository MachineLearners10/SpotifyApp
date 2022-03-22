const express = require('express');
const sessions = require('express-session');
require('dotenv').config();
const path = require('path');
const passport = require('passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(sessions({ secret: process.env.SESSION_SECRET, saveUnitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./auth'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error')
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = app;
