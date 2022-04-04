import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopMenu = () => {
  const { user } = useSelector((state) => state.user);

  if (user.token) {
    return (
      <div>
        <nav>
          <div>
            <Link
              to="/helloWorld"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Home
            </Link>
            <Link to="/about">About</Link>
            <a href=
            // "http://localhost:8888"
            "https://catch-a-vibe.herokuapp.com"
            >Sign out</a>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <div>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </div>
    );
  }
};

export default TopMenu;
