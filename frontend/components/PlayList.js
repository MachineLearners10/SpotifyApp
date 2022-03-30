import React, { useEffect } from "react";
import Player from "./Player";
import Test from "./playlist/Test.js";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../redux/getPlaylist";
import fetchPlaylist from "../redux/hooks/fetchPlaylist";
function PlayList() {
  const dispatch = useDispatch();
  const { genresList, user } = fetchPlaylist();
  let genres = JSON.parse(window.localStorage.getItem("listGenres"));
  console.log(genres[0].genre + ',' + genres[1].genre);
  useEffect(() => {
    dispatch(getPlaylist(genres[0].genre + ',' + genres[1].genre));
  }, []);
  const playlistTracks = useSelector((state) => state.getPlaylist);

  return (
    <div>
      <div>
        <div>
          <Test songs={playlistTracks.playlist} />
        </div>
        <Player user={user} playlistTracks={playlistTracks} />
      </div>
    </div>
  );
}

export default PlayList;
