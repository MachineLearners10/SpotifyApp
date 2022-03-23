import React from "react";
import { Link } from "react-router-dom";

function CalmDown() {
  const genres = ["chill", "rap", "hip-hop", "edm", "rock"];
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
