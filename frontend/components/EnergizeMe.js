import React from "react";
import { Link } from "react-router-dom";

function EnergizeMe() {
  const genres = [
    "acoustic",
    "chill",
    "country",
    "dance",
    "dancehall",
    "disco",
    "electronic",
    "happy",
    "hip-hop",
    "holidays",
    "indie-pop",
    "k-pop",
    "latin",
    "latino",
    "party",
    "pop",
    "reggae",
    "reggaeton",
    "rock",
  ];
  return (
    <div className="main-content">
      <h1 className="genre">Select a genre</h1>
      <div className="container3">
        {genres.map((genre, index) => {
          return (
            <div key={index}>
              <Link to="/playlist">
                <button className="button-style">{genre}</button>
              </Link>
            </div>
          );
        })}
        {/* <Link to="/playlist">
          <button className="button-style">Techno</button>
        </Link>
        <Link to="/playlist">
          <button className="button-style">Pop</button>
        </Link>
        <Link to="/playlist">
          <button className="button-style">Indie pop</button>
        </Link> */}
      </div>
    </div>
  );
}

export default EnergizeMe;
