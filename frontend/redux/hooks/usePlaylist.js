import { useDispatch, useSelector } from "react-redux";
import { dispatchLikedSongs } from "../../redux/playlist";
import { useEffect } from "react";
import { fetchUser } from "../../redux/user";
import { dispatchFetchSongs } from "../../redux/playlist";
import { getPlaylist } from "../getPlaylist";
export default function usePlaylist() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlist.songs);
  const likedSongs = useSelector((state) => state.playlist.likedSongs);
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(dispatchFetchSongs());
  }, []);

  function getLikedSongs(songs) {
    const songsId = songs.map((song) => song.id);
    dispatch(dispatchLikedSongs(songsId));
  }

  function convertDuration(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return { convertDuration, getLikedSongs, likedSongs, songs };
}
