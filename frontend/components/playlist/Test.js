import React, { useEffect } from "react";
import SongRow from "./SongRow.js";
import Header from "./Header.js";
import usePlaylist from "../../redux/hooks/usePlaylist";

function Test({ songs, user }) {
  const { convertDuration, getLikedSongs, likedSongs } = usePlaylist();

  if (songs !== undefined && likedSongs === undefined) {
    getLikedSongs(songs);
  }
  return (
    <div className="page">
      <div className="playlist">
        <Header user={user} songs={songs} />
        {songs === undefined && likedSongs === undefined ? (
          <div className="loading">
          <iframe src="https://giphy.com/embed/3y0oCOkdKKRi0" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
        ) : (
          songs.map((song, i) => (
            <SongRow
              key={song.id}
              convertDuration={convertDuration}
              order={i + 1}
              song={song}
              className="songRow"
              likedSongs={likedSongs}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Test;
