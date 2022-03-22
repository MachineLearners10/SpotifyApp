import React from "react";
import { Link } from "react-router-dom";

function CalmDown() {
  return (
    <div>
      <h1 className="subtitle">What kind of gender do you like?</h1>
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
