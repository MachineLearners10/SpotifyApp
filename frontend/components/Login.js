import React from 'react';

const Login = () => {
    return (
      <div className="login-form">
        <a
        href="/auth/spotify"
        className="button-two">
          Log in to Spotify
        </a>
        <img
        id="spotify-logo"
        src="/images/spotify.png"
        alt="" />
      </div>
    )
  };

export default Login;
