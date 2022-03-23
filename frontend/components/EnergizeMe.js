import React from "react";
import { Link } from "react-router-dom";

function EnergizeMe() {
  return (
    <div>
      <h1 className="subtitle">Select Genre:</h1>
      <div className="container">
        <Link to="/playlist">
          <button>Techno</button>
        </Link>
        <Link to="/playlist">
          <button>Pop</button>
        </Link>
        <Link to="/playlist">
          <button>Indie pop</button>
        </Link>
      </div>
    </div>
  );
}

export default EnergizeMe;
