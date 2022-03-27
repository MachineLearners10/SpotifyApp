import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux"
import { fetchPlaylistThunk } from "../redux/playlist";
import { fetchUser } from "../redux/user";

function Player() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchPlaylistThunk());
  }, []);
  const { playlist } = useSelector((state) => state.playlist);
  // performance.navigation.type == performance.navigation.TYPE_RELOAD

  let spotifyPlayer;
  if (user.token) {
    spotifyPlayer = (
      <div>
        <SpotifyPlayer
          token={user.token}
          uris={playlist}
        />
      </div>
    );
  } else {
    spotifyPlayer = (<p>Loading</p>)
  };
  return (
    spotifyPlayer
  );
}

export default Player;
