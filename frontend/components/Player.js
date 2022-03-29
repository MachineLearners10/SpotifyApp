import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
// import { fetchPlaylistThunk } from "../redux/playlist";
import { getIdSongs } from "../redux/getIdSongs";
import { getGenres } from "../redux/getGenres";
import { fetchUser } from "../redux/user";
import {
  getRecommendations,
  addRecommendation,
} from "../redux/getRecommendations";

const spotifyApi = new SpotifyWebApi();

const n = 20;
const sample = (items) => {
  return items
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);
};

function Player() {
  const { idSongs } = useSelector((state) => state.getIdSongs);
  const genresList = useSelector((state) => state.getGenres);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getGenres());
    dispatch(getIdSongs());
  }, []);

  const accessToken = user.token;
  const genres = [...new Set(genresList.map((a) => a.genre))];

  useEffect(async () => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    console.log("seeds", genres, idSongs);
    await spotifyApi
      .getRecommendations({
        seed_genres: genres,
        seed_tracks: idSongs,
      })
      .then(function (data) {
        console.log("I ran x times")
        let recommendation = data.tracks.map((a) => a.uri);
        dispatch(addRecommendation(recommendation));
      });
  }, [accessToken]);

  useEffect(() => {
    dispatch(getRecommendations);
    // dispatch(fetchPlaylistThunk());
  }, []);

  // const { playlist } = useSelector((state) => state.playlist);
  const recommendations = useSelector((state) => state.getRecommendations);
  const uris = sample([].concat.apply([], recommendations));

  let spotifyPlayer;
  if (user.token) {
    spotifyPlayer = (
      <div>
        <SpotifyPlayer token={user.token} uris={uris} />
      </div>
    );
  } else {
    spotifyPlayer = <p>Loading</p>;
  }
  return spotifyPlayer;
}

export default Player;
