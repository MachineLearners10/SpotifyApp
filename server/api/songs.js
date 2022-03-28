const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACKURL,
});

router.get("/topTracks", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getMyTopTracks().then(async function (data) {
      // let topSongs = data.body.items;
      // topSongs.forEach(async (song) => {
      //   await User.updateOne(
      //     { spotifyId: req.user.spotifyId },
      //     { $push: { topSongs: song } }
      //   );
      // });
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
router.get("/playlist", (req, res, next) => {
  spotifyApi.setAccessToken(req.user.token);
  spotifyApi.getPlaylist("08SEtNKtOwc7p74VZiriVx").then(function (data) {
    const trackUris = data.body.tracks.items.map(
      (trackDetails) => trackDetails.track.uri
    );
    res.send(trackUris);
  });
});

router.get("/likedSongs", (req, res, next) => {
  console.log(req.query);
  spotifyApi.setAccessToken(req.user.token);
  spotifyApi.containsMySavedTracks(req.query.songs).then(function (data) {
    res.send(data);
  });
});

module.exports = router;
