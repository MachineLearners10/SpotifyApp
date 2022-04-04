import React from "react";

const Login = () => {
  return (
    <div className="login-form">
      <h1 className="title">Trouvaille (noun) : a lucky find</h1>
      <a href="/auth/spotify" className="button-two">
        Login
      </a>
      <img className="logo" src={"Spotify_Logo_CMYK_Black.png"} alt="" />
    </div>
  );
};

export default Login;
