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
    .slice(0, 1);
};

//list of random id songs
router.get("/playlist", async (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    const topTracks = await spotifyApi.getMyTopTracks();
    let tracks = topTracks.body.items;
    let ids = tracks.map((a) => a.id);
    let randomIds = sample(ids);
    console.log(req.query.genresList);
    const playlistRecomendation = await spotifyApi.getRecommendations({
      seed_genres: req.query.genresList,
      seed_tracks: "",
      seed_artists: "",
      limit: 50,
    });
    //gonna do some addtional filtering and tweak the limit to get more songs
    // let trackAndArtistIds = playlistRecomendation.body.tracks.map((track) => {
    //   let songObj = { artist: track.artists[0].id, id: track.id };
    //   return songObj;
    // });
    // let traccs = "";
    // let songCount = 0;
    // for (let i = 0; i < trackAndArtistIds.length; i++) {
    //   let song = trackAndArtistIds[i];
    //   let artistInfo = await spotifyApi.getArtist(song.artist);
    //   if (
    //     artistInfo.body.genres
    //       .join()
    //       .includes(req.query.genresList.split(",")[1]) &&
    //     songCount < 3
    //   ) {
    //     traccs += song.id + ",";
    //     songCount++;
    //     console.log(song.id);
    //   }
    // }
    // console.log(traccs.slice(0, traccs.length - 1));
    // if (traccs.length === 0) traccs = "";
    // else traccs = traccs.slice(0, traccs.length - 1);

    // const playlistRecomendationerer = await spotifyApi.getRecommendations({
    //   seed_genres: req.query.genresList, //req.query.genresList.split(',')[0],
    //   seed_tracks: traccs,
    //   seed_artists: "",
    //   limit: 50,
    // });
    // trackAndArtistIds = playlistRecomendationerer.body.tracks.map(track => {
    //   let songObj = {artist: track.artists[0].id, id: track.id}
    //   return songObj
    // })
    // traccs = '';
    // for (let i = 0; i < trackAndArtistIds.length; i++) {
    //   let song = trackAndArtistIds[i];
    //   let artistInfo = await spotifyApi.getArtist(song.artist);
    //   if (artistInfo.body.genres.join().includes(req.query.genresList.split(',')[1]) && songCount < 6) {
    //     traccs += song.id + ',';
    //     songCount++;
    //     console.log(song.id);
    //   }
    // }
    // console.log(traccs);
    // const playlistRecomendationererer = await spotifyApi.getRecommendations({
    //   seed_genres: "",
    //   seed_tracks: traccs,
    //   seed_artists: "",
    //   limit: 50
    // });
    res.send(playlistRecomendation);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
