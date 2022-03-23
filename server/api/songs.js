const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: "http://localhost:8888/auth/spotify/callback",
});

router.get("/topTracks", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getMyTopTracks()
      .then(function (data) {
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});

//This will change to getRecommendation api call and not hardcoded to a specific playlist
router.get("/playlist", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getPlaylist('08SEtNKtOwc7p74VZiriVx')
      .then(function(data) {
        const trackUris = data.body.tracks.items.map(trackDetails => trackDetails.track.uri)
        res.send(trackUris);
      })
  } catch (error) {
    next(error);
  }
})

module.exports = router;
