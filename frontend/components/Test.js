import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylistThunk } from "../redux/playlist";
function Test() {
  const songs = useSelector((state) => state.playlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlaylistThunk());
  }, []);
  return (
    <div className="container">
      <div>{/* <img src={require("../../public/calmImage.jpeg")} /> */}</div>
      <div>
        <div>
          <h1>Songs</h1>
          <h2>
            <ul>
              {songs === undefined ? (
                <li>no songs</li>
              ) : (
                songs.map((song) => <li>{song.name}</li>)
              )}
            </ul>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Test;
