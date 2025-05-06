import React from "react";
import Login from "./Login";

function Dashboard({ isLoggedIn }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Login isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Dashboard;
