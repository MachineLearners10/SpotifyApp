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
        {/* {songs === undefined && likedSongs === undefined ? (
          <h1>loading</h1>
        ) : (
          songs.map((song, i) => (
            <SongRow
              key={i + 1}
              convertDuration={convertDuration}
              order={i + 1}
              song={song}
              className="songRow"
              likedSongs={likedSongs}
            />
          ))
        )} */}
      </div>
    </div>
  );
}

export default Queue;
