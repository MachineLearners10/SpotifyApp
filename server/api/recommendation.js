const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACKURL,
});

const n = 3;
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
    const topTracks = await spotifyApi.getMyTopTracks();
    let tracks = topTracks.body.items;
    let ids = tracks.map((a) => a.id);
    let randomIds = sample(ids);
    console.log(req.query.genresList)
    const playlistRecomendation = await spotifyApi.getRecommendations({
      seed_genres: req.query.genresList,
      seed_tracks: randomIds.join(","),
      seed_artists: "",
    });
    //gonna do some addtional filtering and tweak the limit to get more songs
    let trackIds = playlistRecomendation.body.tracks.map(track => {
      return track.id
    })
    console.log(trackIds);
    const filteredRecommendation = await spotifyApi.getTracks(trackIds);
    console.log(filteredRecommendation.body.tracks[0])

    res.send(playlistRecomendation);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
