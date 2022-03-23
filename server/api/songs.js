const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: "http://localhost:8888/auth/spotify/callback",
});

router.get("/", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getMyTopTracks().then(function (data) {
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});

router.get("/recs", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getRecommendations().then(function (data) {
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
