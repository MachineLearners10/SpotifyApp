const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  spotifyId: {
    type: Sequelize.STRING
  },
  token: {
    type: Sequelize.TEXT
  },
});

module.exports = User;
