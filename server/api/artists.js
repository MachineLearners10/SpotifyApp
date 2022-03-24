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
    spotifyApi.getMyTopArtists().then(async function (data) {
      let topArtists = data.body.items;
      topArtists.forEach(async (artist) => {
        await User.updateOne(
          { spotifyId: req.user.spotifyId },
          { $push: { topArtists: artist } }
        );
      });
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// GET https://api.spotify.com/v1/recommendations/available-genre-seeds

// GET https://api.spotify.com/v1/recommendations
