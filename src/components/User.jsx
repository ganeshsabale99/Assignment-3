import React from "react";
import UserProfile from "./UserProfile";

function User({ user, isLoggedIn }) {
  return (
    <div>
      <h1>This is User</h1>
      {isLoggedIn ? (
        <>
          <UserProfile user={user} />
          <button onClick={() => alert("Log Out")}>Logout</button>
        </>
      ) : (
        <>
          <p>Please Log In</p>
          <button onClick={() => alert("Log in")}>Login</button>
        </>
      )}
    </div>
  );
}

export default User;
