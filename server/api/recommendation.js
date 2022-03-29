const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACKURL,
});

const sample = (items) => {
  return items
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 1);
};

//list of random id songs
router.get("/idTracks", async (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    const songsData = await spotifyApi.getMyTopTracks().then(function (data) {
      let dataTracks = data.body.items;
      let ids = dataTracks.map((a) => a.id);
      let randomIds = sample(ids);
      res.send(randomIds);
    });
  } catch (error) {
    next(error);
  }
});

//list of random id artists
router.get("/idArtists", async (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    const songsData = await spotifyApi.getMyTopTracks().then(function (data) {
      let dataTracks = data.body.items;
      let artists = dataTracks.map((a) => a.artists);
      let listIds = [];
      for (let i = 0; i < artists.length; i++) {
        for (let j = 0; j < artists[i].length; j++) {
          listIds.push(artists[i][j].id);
        }
      }
      let randomIds = sample(listIds);
      res.send(randomIds);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
