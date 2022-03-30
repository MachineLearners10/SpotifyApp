import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../redux/getPlaylist";
import fetchPlaylist from "../redux/hooks/fetchPlaylist";

function Player({ user, playlistTracks }) {
  // function getUris(arrayOfTracks) {
  //   return arrayOfTracks.map((track) => track.uri);
  // }
  // getUris(playlistTracks.playlist)
  const currentSong = useSelector((state) => state.playlist.playing);
  return (
    <div>
      {
        /* {user.token && Object.keys(playlistTracks).length > 0 */ currentSong ? (
          <SpotifyPlayer
            initialVolume={0.5}
            token={user.token}
            uris={`${currentSong}`}
          />
        ) : (
          <p> Loading </p>
        )
      }
    </div>
  );
}

export default Player;
