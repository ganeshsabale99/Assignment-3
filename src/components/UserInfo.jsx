import React from "react";

function UserInfo({ name, email, bio }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserInfo;
