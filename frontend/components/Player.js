import React from "react";
import SpotifyPlayer from 'react-spotify-web-playback';
import { useSelector } from 'react-redux'

function Player() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <SpotifyPlayer
      token={user.token}
      />
    </div>
  );
}

export default Player;
