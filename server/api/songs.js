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
    spotifyApi.getMyTopTracks().then(function (data) {
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});

router.get("/playlist", (req, res, next) => {
  spotifyApi.setAccessToken(req.user.token);
  spotifyApi.getPlaylist("08SEtNKtOwc7p74VZiriVx").then(function (data) {
    const trackUris = data.body.tracks.items.map(
      (trackDetails) => trackDetails.track.uri
    );
    res.send(trackUris);
  });
});

router.get("/recommendations", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getRecommendations({
        min_energy: 0.4,
        seed_artists: ["6mfK6Q2tzLMEchAr0e9Uzu", "4DYFVNKZ1uixa6SQTvzQwJ"],
        min_popularity: 50,
      })
      .then(function (data) {
        res.send(data.body);
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
