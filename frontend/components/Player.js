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

const sample = (items) => {
  return items
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 20);
};

function Player() {
  const { user } = useSelector((state) => state.user);
  const genresList = useSelector((state) => state.getGenres);
  const { idSongs } = useSelector((state) => state.getIdSongs);

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
    console.log("ids and genres", idSongs, genres);

    await spotifyApi
      .getRecommendations({
        seed_tracks: idSongs,
        seed_genres: genres,
      })
      .then((data) => {
        let recommendation = data.tracks.map((track) => track.uri);
        dispatch(addRecommendation(recommendation));
      })
      .then(() => {
        dispatch(getRecommendations());
      });
  }, [accessToken, idSongs]);

  // useEffect(() => {
  // dispatch(fetchPlaylistThunk());
  // }, []);

  // const { playlist } = useSelector((state) => state.playlist);
  const recommendations = useSelector((state) => state.getListRecommendations);
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
