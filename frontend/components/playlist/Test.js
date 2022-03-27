import React, { useEffect } from "react";
import SongRow from "./SongRow.js";
import Header from "./Header.js";
import usePlaylist from "../../redux/hooks/usePlaylist";
import { useDispatch, useSelector } from "react-redux";
import { dispatchFetchSongs } from "../../redux/playlist";

function Test() {
  const { getLikedSongs } = usePlaylist();

  const songs = useSelector((state) => state.playlist.songs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchFetchSongs());
  }, []);

  // if (songs !== undefined) {
  //   console.log(getLikedSongs(songs));
  // }

  return (
    <div className="playlist">
      <Header />
      {songs === undefined ? (
        <h1>no songs</h1>
      ) : (
        songs.map((song, i) => (
          <SongRow order={i + 1} song={song} className="songRow" />
        ))
      )}
    </div>
  );
}

export default Test;
