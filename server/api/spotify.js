const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: "http://localhost:8888/auth/spotify/callback",
});

router.get("/topTracks", (req, res, next) => {
  try {
    console.log(req.user.token);
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getMyTopTracks().then(function (data) {
      let topTracks = data.body.items;
      res.send(topTracks);
      console.log(topTracks);
    });
  } catch (error) {
    next(error);
  }
});

router.get("/recommendations", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getRecommendations({
        min_energy: 0.4,
        seed_artists: [
          "6mfK6Q2tzLMEchAr0e9Uzu",
          "4DYFVNKZ1uixa6SQTvzQwJ",
          "4gzpq5DPGxSnKTe4SA8HAU",
          "3Z7c7stYBMbQ8Rs5WfE69y",
          "3ZOBihPdn7f4t3zMw9Hoqg",
        ],
        seed_genre: ["pop", "rock", "latino", "guitar", "holidays"],
        seed_tracks: [
          "4RQjgQaT9mJpMNoxqoGdAh",
          "2kGnzHH1Q6YaxjNylz68CM",
          "7FvGfRzzPY8D788ufvZVp8",
          "5G9apJpojORVj2gwLgmSrD",
          "020aPMXlwYFpPB7cI8Kuc1",
        ],
        min_popularity: 50,
      })
      .then(
        function (data) {
          let recommendations = data.body;
          res.send(recommendations);
          console.log(recommendations);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  } catch (error) {
    next(error);
  }
});

router.get("/categories", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi
      .getPlaylistsForCategory("party", {
        country: "US",
        limit: 5,
        offset: 0,
      })
      .then(
        function (data) {
          let category = data.body;
          res.send(category);
          console.log(category);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
