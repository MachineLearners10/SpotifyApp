import React from "react";

const Login = () => {
  return (
    <div className="login-form">
      <h1 className="title">Welcome to Catch A Vibe </h1>
      <a href="/auth/spotify" className="button-two">
        Login
      </a>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        alt=""
      />
    </div>
  );
};

export default Login;
