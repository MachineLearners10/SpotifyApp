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
    const topTracks = await spotifyApi.getMyTopTracks()
    // console.log("req.query", req.query)
    let tracks = topTracks.body.items;
    let ids = tracks.map((a) => a.id);
    let randomIds = sample(ids);
    let genreOneObject = JSON.parse(req.query.genres[0]);
    let genreTwoObject = JSON.parse(req.query.genres[1]);
    let genres = `${genreOneObject.genre},${genreTwoObject.genre}`;
    const playlistRecomendation = await spotifyApi.getRecommendations({
      seed_genres: genres,
      seed_tracks: randomIds.join(','),
      seed_artists: '',
    })
    const trackUris = playlistRecomendation.body.tracks.map((trackDetails) => trackDetails.uri);
    console.log("playlistReccomendation!!!@@", trackUris);
    res.send(trackUris);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//list of random id artists
// router.get("/idArtists", (req, res, next) => {
//   try {
//     spotifyApi.setAccessToken(req.user.token);
//     const songsData = spotifyApi.getMyTopTracks().then(function (data) {
//       let dataTracks = data.body.items;
//       let artists = dataTracks.map((a) => a.artists);
//       let listIds = [];
//       for (let i = 0; i < artists.length; i++) {
//         for (let j = 0; j < artists[i].length; j++) {
//           listIds.push(artists[i][j].id);
//         }
//       }
//       let randomIds = sample(listIds);
//       res.send(randomIds);
//     });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
