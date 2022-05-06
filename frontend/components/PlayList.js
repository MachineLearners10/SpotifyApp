import React, { useEffect } from "react";
import Player from "./Player";
import Playlist from "./playlist/Playlist.js";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../redux/getPlaylist";
import fetchPlaylist from "../redux/hooks/fetchPlaylist";
import { getGenres } from "../redux/getGenres";
import Queue from "./playlist/Queue.js";
//const num = Math.floor(Math.random() * (10 - 1) + 1);
function PlayList() {
  const dispatch = useDispatch();
  const { genresList, user } = fetchPlaylist();
  let genres = JSON.parse(window.localStorage.getItem("listGenres"));
  console.log("this is genres", genres);
  if (!genres) genres = [{ genre: "chill" }, { genre: "indie" }];
  useEffect(() => {
    dispatch(getPlaylist(genres[0].genre + "," + genres[1].genre));
  }, []);
  const playlistTracks = useSelector((state) => state.getPlaylist);
  return (
    <div className={`background`}>
      <div>
        <Playlist user={user} songs={playlistTracks.playlist} />
      </div>
      <Player user={user} playlistTracks={playlistTracks} />
    </div>
  );
}

export default PlayList;
