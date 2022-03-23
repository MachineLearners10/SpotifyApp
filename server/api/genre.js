const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: "http://localhost:8888/auth/spotify/callback",
});

router.get("/rap", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getCategory("rap", {
        country: "US",
        locale: "sv_US",
      })
      .then(function (data) {
        res.send(data.body);
        console.log(data.body);
      });
  } catch (error) {
    next(error);
  }
});
router.get("/chill", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getCategory("chill", {
        country: "US",
        locale: "sv_US",
      })
      .then(function (data) {
        res.send(data.body);
        console.log(data.body);
      });
  } catch (error) {
    next(error);
  }
});
router.get("/hip-hop", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getCategory("hip-hop", {
        country: "US",
        locale: "sv_US",
      })
      .then(function (data) {
        res.send(data.body);
        console.log(data.body);
      });
  } catch (error) {
    next(error);
  }
});
router.get("/edm", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getCategory("edm", {
        country: "US",
        locale: "sv_US",
      })
      .then(function (data) {
        res.send(data.body);
        console.log(data.body);
      });
  } catch (error) {
    next(error);
  }
});
router.get("/rock", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getCategory("rock", {
        country: "US",
        locale: "sv_US",
      })
      .then(function (data) {
        res.send(data.body);
        console.log(data.body);
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
