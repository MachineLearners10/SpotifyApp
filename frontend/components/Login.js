import React from "react";

const Login = () => {
  return (
    <div className="login-form">
      <h1 className="title">Free Swan</h1>
      <a href="/auth/spotify" className="button-two">
        Login
      </a>
      <img className="logo" src={"Spotify_Logo_CMYK_Black.png"} alt="" />
      <h6 className="frisson_meaning">
        Frisson (noun) /frēˈsôn/: the phenomenon of chills or goosebumps that
        come from a piece of music
      </h6>
    </div>
  );
};

export default Login;
