import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../redux/getPlaylist";
import fetchPlaylist from "../redux/hooks/fetchPlaylist";

function Player() {
  const dispatch = useDispatch();
  const { genresList, user } = fetchPlaylist();
  useEffect(() => {
    dispatch(getPlaylist(genresList));
  }, []);
  const playlistTrackUris = useSelector((state) => state.getPlaylist);

  function getUris(arrayOfTracks) {
    console.log(arrayOfTracks.map((track) => track.uri));
    return arrayOfTracks.map((track) => track.uri);
  }

  return (
    <div className="player">
      {user.token && Object.keys(playlistTrackUris).length > 0 ? (
        <SpotifyPlayer
          token={user.token}
          uris={getUris(playlistTrackUris.playlist.body.tracks)}
        />
      ) : (
        <p> Loading </p>
      )}
    </div>
  );
}

export default Player;
