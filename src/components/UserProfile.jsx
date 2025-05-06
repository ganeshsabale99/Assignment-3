import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function UserProfile({ user }) {
  if (!user) return null;

  return (
    <div>
      <h1>This is User Profile</h1>
      <Avatar image={user.image} alt={user.name} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
}

export default UserProfile;
