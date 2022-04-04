import React from "react";

const Login = () => {
  return (
    <div className="login-form">
      <h1 className="title">Welcome to Free Swan</h1>
      <p className="welcome-subtitle">Frisson (noun) /frēˈsôn/: the phenomenon of chills or goosebumps that come from a piece of music</p>
      <a href="/auth/spotify" className="button-two">
        Login
      </a>
      <img className="logo" src={"Spotify_Logo_CMYK_Black.png"} alt="" />
    </div>
  );
};


export default Login;
