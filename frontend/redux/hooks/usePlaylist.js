import { useDispatch, useSelector } from "react-redux";
import { dispatchLikedSongs } from "../../redux/playlist";
import { useEffect } from "react";

export default function usePlaylist() {
  const dispatch = useDispatch();

  function getLikedSongs(songs) {
    console.log(songs);
    const songsId = songs.map((song) => song.id);
    console.log(songsId);
    dispatch(dispatchLikedSongs(songsId));
  }

  function convertDuration(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return { convertDuration, getLikedSongs };
}
