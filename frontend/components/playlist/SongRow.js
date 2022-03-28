import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
function SongRow({ song, order, convertDuration, likedSongs }) {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);
  return likedSongs === undefined ? (
    <div>loading</div>
  ) : (
    <div
      className="songRow"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className="songRow_left"
        onClick={() => {
          setSelected(!selected);
        }}
      >
        {hover ? (
          selected ? (
            <PauseIcon className="svg_icons" />
          ) : (
            <PlayArrowIcon className="svg_icons" />
          )
        ) : (
          <p className="songRow_order">{order < 10 ? `0${order}` : order}</p>
        )}
        <img className="songRow_album" src={song.album.images[0].url} alt="" />
        <div className="songRow_info">
          {selected ? (
            <h1 className="active">{song.name}</h1>
          ) : (
            <h1 className="inactive">{song.name}</h1>
          )}
          <p>{song.artists.map(({ name }) => name).join(", ")}</p>
        </div>
      </div>
      <div className="songRow_right">
        <p className="albumName">{song.album.name}</p>
        <p className="mood">chill</p>
        {likedSongs[order - 1] ? (
          <FavoriteIcon
            className="favorite"
            onClick={() => {
              console.log(`click`);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            className="favorite"
            onClick={() => {
              console.log(`click`);
            }}
          />
        )}
        <p className="duration">{convertDuration(song.duration_ms)}</p>
      </div>
    </div>
  );
}
//useContext and switching the heart from clear to filled

export default SongRow;
