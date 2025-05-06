import React from "react";

function Avatar({ image, alt }) {
  return (
    <div>
      <h2>Avatar</h2>
      <img src={image} alt={alt} width="150" />
    </div>
  );
}

export default Avatar;
