import React from "react";
import { Link } from "react-router-dom";

function CalmDown() {
  return (
    <div>
      <h1 className="subtitle">Select a genre</h1>
      <div className="container">
        <Link to="/playlist">
          <button>Classical</button>
        </Link>
        <Link to="/playlist">
          <button>Jazz</button>
        </Link>
      </div>
    </div>
  );
}

export default CalmDown;
