import React from "react";
import { Link } from "react-router-dom";

function CalmDown() {
  const genres = [
    "acoustic",
    "afrobeat",
    "ambient",
    "blues",
    "bossanova",
    "chill",
    "classical",
    "comedy",
    "country",
    "folk",
    "funk",
    "garage",
    "gospel",
    "goth",
    "groove",
    "grunge",
    "guitar",
    "happy",
    "jazz",
    "movies",
    "mpb",
    "new-age",
    "new-release",
    "opera",
    "party",
    "piano",
    "pop",
    "power-pop",
    "reggae",
    "road-trip",
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
      </div>
    </div>
  );
}

export default CalmDown;
