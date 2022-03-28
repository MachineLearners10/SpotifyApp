import React from "react";
import Player from "./Player";

function PlayList({ uris }) {
  return (
    <div className="container">
      <div>{/* <img src="../../public/dance.gif" /> */}</div>
      <div>
        <div>
          <h1>Playlist</h1>
          <p>List of music</p>
        </div>
        <Player />
      </div>
    </div>
  );
}

export default PlayList;
