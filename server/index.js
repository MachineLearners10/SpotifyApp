const express = require('express');
const path = require('path');
const db = require('./db/database');
const passport = require('passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/auth', require('./auth'))

app.get("/helloWorld",)

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
