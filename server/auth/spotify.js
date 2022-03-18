const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const router = require('express').Router();
require('dotenv').config();

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.SECRET,
      callbackURL: 'http://localhost:8888/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);

router.get(
  '/',
  passport.authenticate('spotify', {
    scope: [
      'user-read-email',
      'user-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'playlist-read-private',
      'playlist-read-collaborative',
      'user-top-read'
    ]
  })
)

router.get(
  '/callback',
  passport.authenticate('spotify', {
    successRedirect: '/login',
    failureRedirect: '/login'
  })
)
module.exports = router;
