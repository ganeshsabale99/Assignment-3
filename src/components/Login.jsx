import React from "react";

function Login({ isLoggedIn }) {
  return (
    <div>
      <p>{isLoggedIn ? "Welcome back, User!" : "Please log in!"}</p>
    </div>
  );
}

export default Login;
