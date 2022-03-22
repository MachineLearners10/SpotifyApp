const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const router = require('express').Router();
const User = require('../db/models/user');

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.SECRET,
      callbackURL: 'http://localhost:8888/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({
        where: { spotifyId: profile.id },
        defaults: { spotifyId: profile.id, email: profile.emails[0].value, token: accessToken }
      }).then(async function([user]) {
        await user.update({ token: accessToken })
        return done(null, user)
      })
    }
  )
);

router.get(
  '/',
  passport.authenticate('spotify', {
    scope: [
      'user-read-email',
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

