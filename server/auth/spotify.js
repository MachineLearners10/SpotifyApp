const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const router = require('express').Router();
const User = require('../db/models/user');
const mongoose = require('mongoose');

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.SECRET,
      callbackURL: 'http://localhost:8888/auth/spotify/callback'
    },

    async function (accessToken, refreshToken, expires_in, profile, done) {
      const user = new User({
        email: profile.emails[0].value,
        spotifyId: profile.id,
        token: accessToken,
        // topSongs: ['songs']
      });

      if (!await User.exists({ spotifyId: profile.id })) {
        await user.save()
      } else {
        await User.findOneAndUpdate({ spotifyId: profile.id }, {token: accessToken/*, topSongs: 'songs'*/})
      }
      return done(null, user)
    }
  )
);

router.get(
  '/',
  passport.authenticate('spotify', {
    scope: [
      'user-read-private user-read-email user-top-read'
    ]
  })
)

router.get(
  '/callback',
  passport.authenticate('spotify', { failureRedirect: '/unauth' }),
  function(req, res) {
    res.header("X-Access-Token", req.user.token)
    res.redirect('/helloWorld')
  }
)

module.exports = router;

