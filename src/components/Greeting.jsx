import React from "react";

function Greeting({ greetingOfDay, name }) {
  return (
    <div>
      <h1>Good {greetingOfDay}, {name}</h1>
    </div>
  );
}

export default Greeting;
