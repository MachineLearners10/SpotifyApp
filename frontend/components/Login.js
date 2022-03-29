import React from "react";

const Login = () => {
  return (
    <div className="login-form">
      <h1 className="title">Welcome to Catch A Vibe </h1>
      <a href="/auth/spotify" className="button-two">
        Login In
      </a>
      <img
        src="https://www.google.com/search?q=spotify+logo&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1vMSMsun2AhUzhHIEHZcOC3YQ_AUoAXoECAEQAw&biw=683&bih=697&dpr=2#imgrc=5NdoWYJ9zhrB6M"
        alt=""
      />
    </div>
  );
};

export default Login;
