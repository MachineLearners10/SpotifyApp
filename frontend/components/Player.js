import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../redux/getPlaylist";
import fetchPlaylist from "../redux/hooks/fetchPlaylist";

function Player({ user, playlistTracks }) {
  function getUris(arrayOfTracks) {
    return arrayOfTracks.map((track) => track.uri);
  }
  console.log(playlistTracks);
  const currentSong = useSelector((state) => state.playlist.playing);
  function startHere(currentSong, arrayOfTracks) {
    let count = 0;
    for (let track of arrayOfTracks) {
      if (track.uri === currentSong) {
        return count;
      }
      count++;
    }
    return 0;
  }
  return (
    <div>
      {
        user.token && Object.keys(playlistTracks).length > 0 ? (
          <SpotifyPlayer
            initialVolume={0.5}
            token={user.token}
            uris={getUris(playlistTracks.playlist)}
            offset={startHere(currentSong, playlistTracks.playlist)}
            autoPlay={true}
          />
        ) : (
          <p> Loading </p>
        )
      }
    </div>
  );
}

export default Player;
