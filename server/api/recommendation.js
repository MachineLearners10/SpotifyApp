const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACKURL,
});

const n = 2;
const sample = (items) => {
  return items
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);
};

//list of random id songs
router.get("/playlist", async (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    const topTracks = await spotifyApi.getMyTopTracks()
    let tracks = topTracks.body.items;
    let ids = tracks.map((a) => a.id);
    let randomIds = sample(ids);
    console.log(req.query);
    const genres = req.query.genresList.map(genre => JSON.parse(genre).genre)
    // let genreOneObject = JSON.parse(req.query.genresList[0]);
    // let genreTwoObject = JSON.parse(req.query.genresList[1]);
    // let genres = `${genreOneObject.genre},${genreTwoObject.genre}`;
    const playlistRecomendation = await spotifyApi.getRecommendations({
      seed_genres: genres.join(','),
      seed_tracks: randomIds.join(','),
      seed_artists: '',
    })
    console.log(playlistRecomendation)
    res.send(playlistRecomendation.body.seeds);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
