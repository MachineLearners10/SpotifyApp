import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from "react-redux";
import { getIdArtists } from "../redux/getIdArtists";
import { getIdSongs } from "../redux/getIdSongs";
import { useSelector } from "react-redux";
import { getGenres } from "../redux/getGenres";
import { fetchUser } from "../redux/user";
import {
  getRecommendations,
  addRecommendation1,
  addRecommendation2,
  addRecommendation3,
} from "../redux/getRecommendations";

import SpotifyPlayer from "react-spotify-web-playback";
const spotifyApi = new SpotifyWebApi();

const n = 15;
const sample = (items) => {
  return items
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);
};

function Recommendation() {
  const { user } = useSelector((state) => state.user);
  const { idSongs } = useSelector((state) => state.getIdSongs);
  const { idArtists } = useSelector((state) => state.getIdArtists);
  const genresList = useSelector((state) => state.getGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getGenres());
    dispatch(getIdArtists());
    dispatch(getIdSongs());
  }, []);
  const accessToken = user.token;
  const genres = [...new Set(genresList.map((a) => a.genre))];

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getRecommendations({
        seed_genres: genres,
      })
      .then(function (data) {
        let recommendation = data.tracks.map((a) => a.uri);
        dispatch(addRecommendation1(recommendation));
      });

    spotifyApi
      .getRecommendations({
        seed_artists: idArtists,
      })
      .then(function (data) {
        let recommendation = data.tracks.map((a) => a.uri);
        dispatch(addRecommendation2(recommendation));
      });
    spotifyApi
      .getRecommendations({
        seed_tracks: idSongs,
      })
      .then(function (data) {
        let recommendation = data.tracks.map((a) => a.uri);
        dispatch(addRecommendation3(recommendation));
      });
  }, [accessToken, idArtists, idSongs]);

  useEffect(() => {
    dispatch(getRecommendations);
  }, []);

  const recommendations = useSelector((state) => state.getRecommendations);
  const uris = sample([].concat.apply([], recommendations));
  return (
    <div>
      <div>{console.log("URIS", uris)}</div>
      {/* <SpotifyPlayer token={user.token} uris={uris} /> */}
    </div>
  );
}

export default Recommendation;
