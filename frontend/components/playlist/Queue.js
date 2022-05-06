import React, { useEffect } from "react";
import SongRow from "./SongRow.js";
import Header from "./Header.js";
import usePlaylist from "../../redux/hooks/usePlaylist";

function Queue({ songs }) {
  const { convertDuration, getLikedSongs, likedSongs } = usePlaylist();

  if (songs !== undefined && likedSongs === undefined) {
    getLikedSongs(songs);
  }
  return (
    <div className="page">
      <div className="playlist">
        <Header />
      </div>
    </div>
  );
}

export default Queue;
