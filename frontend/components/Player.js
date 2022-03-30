import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../redux/getPlaylist";
import fetchPlaylist from "../redux/hooks/fetchPlaylist";
import { fetchUser } from "../redux/user";
import { getGenres } from "../redux/getGenres";

function Player() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(getGenres())
  },
  [])
  const genresList = useSelector((state) => state.getGenres);
  const { user } = useSelector((state) => state.user);
  // const { genresList, user } = fetchPlaylist();

  useEffect(() => {
    console.log("player genresList", genresList)
    dispatch(getPlaylist(genresList))
  },
  [])
  const playlistTrackUris = useSelector((state) => state.getPlaylist);

  function getUris(arrayOfTracks) {
   return arrayOfTracks.map(track => track.uri)
  }

  return (
    <div className="player">
      {user.token && Object.keys(playlistTrackUris).length > 0 ? <SpotifyPlayer token={user.token} uris={getUris(playlistTrackUris.playlist.body.tracks)}/> : <p> Loading </p>}
    </div>
  );
}

export default Player;
