const router = require('express').Router();
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: 'http://localhost:8888/auth/spotify/callback',
})

router.get('/topTracks', (req, res, next) => {
  try {
    console.log(req.user.token)
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getMyTopTracks()
    .then(function(data) {
      res.send(data.body.items);
    })
  } catch (error) {
    next(error);
  }
})

module.exports = router;
