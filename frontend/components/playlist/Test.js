import React, { useEffect } from "react";
import SongRow from "./SongRow.js";
import Header from "./Header.js";
import usePlaylist from "../../redux/hooks/usePlaylist";
import { useDispatch, useSelector } from "react-redux";

function Test() {
  const { songs, convertDuration, getLikedSongs } = usePlaylist();
  // if (songs !== undefined) {
  //   getLikedSongs(songs);
  // }
  return (
    <div className="playlist">
      <Header />
      {songs === undefined ? (
        <h1>no songs</h1>
      ) : (
        songs.map((song, i) => (
          <SongRow
            convertDuration={convertDuration}
            order={i + 1}
            song={song}
            className="songRow"
          />
        ))
      )}
    </div>
  );
}

export default Test;
