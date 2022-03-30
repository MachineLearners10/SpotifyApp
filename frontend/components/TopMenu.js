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
            <Link to="/about">About</Link>
            <Link
              to="/helloWorld"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Home
            </Link>
            <a href="https://accounts.spotify.com/logout">Sing out</a>
          </div>
        </nav>
        <hr />
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
        <hr />
      </div>
    );
  }
};

export default TopMenu;
