import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import {
  setPlaying,
  removeFromSaved,
  addToSaved,
  dispatchSelectSong,
  togglePlaylist,
} from "../../redux/playlist.js";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
function SongRow({ song, order, convertDuration, likedSongs }) {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState("songRow");
  const nextSongs = useSelector((state) => state.playlist.selected);
  const currentSong = useSelector((state) => state.playlist.playing);
  const toggle = useSelector((state) => state.playlist.toggle);
  const selectedSong = useSelector((state) => state.playlist.selected);
  return likedSongs === undefined ? (
    <div>loading</div>
  ) : (
    <div
      className={`${selected}`}
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
          if (currentSong === song.uri) {
            dispatch(togglePlaylist(!toggle));
          } else if (currentSong !== song.uri) {
            dispatch(setPlaying(song.uri));
          }
        }}
      >
        {hover ? (
          currentSong === song.uri && toggle ? (
            <PauseIcon className="svg_icons" />
          ) : (
            <PlayArrowIcon className="svg_icons" />
          )
        ) : (
          <p className="songRow_order">{order < 10 ? `0${order}` : order}</p>
        )}
        <img
          className="songRow_album"
          src={
            song.album.images.length
              ? song.album.images[0].url
              : "https://robohash.org/bobby"
          }
          alt=""
        />
        <div className="songRow_info">
          {currentSong === song.uri ? (
            <h1 className="active">{song.name}</h1>
          ) : (
            <h1 className="inactive">{song.name}</h1>
          )}
          <p>{song.artists.map(({ name }) => name).join(", ")}</p>
        </div>
      </div>
      <div className="songRow_right">
        <p className="albumName">{song.album.name}</p>
        <p className="mood"></p>
        {likedSongs[order - 1] ? (
          <FavoriteIcon
            className="favorited"
            onClick={() => {
              dispatch(
                removeFromSaved(song.uri.slice(14), likedSongs, order - 1)
              );
            }}
          />
        ) : (
          <FavoriteBorderIcon
            className="favorite"
            onClick={() => {
              dispatch(addToSaved(song.uri.slice(14), likedSongs, order - 1));
            }}
          />
        )}
        <p className="duration">{convertDuration(song.duration_ms)}</p>
        <AutoAwesomeIcon
          className="svg_icons"
          onClick={() => {
            if (selected === "songRow_Active") {
              setSelected("songRow");
              dispatch(dispatchSelectSong(nextSongs, song.uri));
            } else if (nextSongs.length <= 4) {
              setSelected("songRow_Active");
              dispatch(dispatchSelectSong(nextSongs, song.uri));
            }
          }}
        />
      </div>
    </div>
  );
}

export default SongRow;
