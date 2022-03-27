import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchFetchSongs } from "../../redux/playlist";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import usePlaylist from "../../redux/hooks/usePlaylist";

function SongRow({ song, order }) {
  const { convertDuration } = usePlaylist();

  return (
    <div className="songRow">
      <div className="songRow_left">
        <p className="songRow_order">{order}</p>
        <img className="songRow_album" src={song.album.images[0].url} alt="" />
        <div className="songRow_info">
          <h1>{song.name}</h1>
          <p>{song.artists.map(({ name }) => name).join(", ")}</p>
        </div>
      </div>
      <div className="songRow_right">
        <p className="albumName">{song.album.name}</p>
        <p className="mood">chill</p>
        <FavoriteBorderIcon
          className="favorite"
          onClick={() => {
            console.log(`click`);
          }}
        />
        <p className="duration">{convertDuration(song.duration_ms)}</p>
      </div>
    </div>
  );
}
//useContext and switching the heart from clear to filled

export default SongRow;
