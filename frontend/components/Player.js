import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
// import { fetchPlaylistThunk } from "../redux/playlist";

import { getIdArtists } from "../redux/getIdArtists";
import { getIdSongs } from "../redux/getIdSongs";
import { getGenres } from "../redux/getGenres";

import { fetchUser } from "../redux/user";
import {
  getRecommendations,
  addRecommendation,
} from "../redux/getRecommendations";

const spotifyApi = new SpotifyWebApi();

// o: what is n? this should have a clearer name
const n = 20;
const sample = (items) => {
  // o: single letter variable names are generally frowned upon
  return items
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);
};

function Player() {
  const { idSongs } = useSelector((state) => state.getIdSongs);
  const { idArtists } = useSelector((state) => state.getIdArtists);
  const genresList = useSelector((state) => state.getGenres);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());

    dispatch(getGenres());
    dispatch(getIdArtists());
    dispatch(getIdSongs());
  }, []);

  const accessToken = user.token;
  // o: please use a clearer name for your map item here like "genreListItem"
  const genres = [...new Set(genresList.map((a) => a.genre))];

  useEffect(() => {
    // o: can't we place this at the top before all the useEffect hooks?
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    // o: use async await
    spotifyApi
      .getRecommendations({
        seed_genres: genres,
      })
      .then(function (data) {
        // o: please use a better name for your map item like "track"
        let recommendation = data.tracks.map((a) => a.uri);
        dispatch(addRecommendation(recommendation));
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getRecommendations({
        seed_artists: idArtists,
      })
      .then(function (data) {
        // o: please use a better name for your map item like "track"
        let recommendation = data.tracks.map((a) => a.uri);
        dispatch(addRecommendation(recommendation));
      });
  }, [accessToken, idArtists]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getRecommendations({
        seed_tracks: idSongs,
      })
      .then(function (data) {
        // o: please use a better name for your map item like "track"
        let recommendation = data.tracks.map((a) => a.uri);
        dispatch(addRecommendation(recommendation));
      });
  }, [accessToken, idSongs]);

  useEffect(() => {
    dispatch(getRecommendations);
    // dispatch(fetchPlaylistThunk());
  }, []);

  // const { playlist } = useSelector((state) => state.playlist);
  const recommendations = useSelector((state) => state.getRecommendations);
  const uris = sample([].concat.apply([], recommendations));
  // performance.navigation.type == performance.navigation.TYPE_RELOAD

  let spotifyPlayer;
  if (user.token) {
    spotifyPlayer = (
      <div>
        <SpotifyPlayer token={user.token} uris={uris} />
        {/* o: this is interesting */}
        <div>{console.log("uris", uris)}</div>
      </div>
    );
  } else {
    spotifyPlayer = <p>Loading</p>;
  }
  return spotifyPlayer;
}

export default Player;
