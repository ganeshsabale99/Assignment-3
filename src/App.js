import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Dashboard from "./components/Dashboard";
import User from "./components/User";

function App() {
  const user = {
    name: "John Doe",
    email: "abc@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV80N19mdWxsX2JvZHlfM2RfYXZhdGFyXzNkX3JlbmRlcl9vZl9hX2pveWZ1bF9idV8zNDhkYWIwNy1iMTE1LTQ1NTMtOWJjYy1kZDc2YTVmZDFmY2VfMS5wbmc.png",
  };

  const greetings = ["Morning", "Afternoon", "Evening"];

  return (
    <div className="App">
      <h1>React Component Design Alignment</h1>

      <div>
        <h2>Child 1 - Greeting</h2>
        {greetings.map((time) => (
          <Greeting key={time} name="Ganesh" greetingOfDay={time} />
        ))}
      </div>

      <div>
        <h2>Child 2 - Dashboard with Message</h2>
        <Dashboard isLoggedIn={true} />
        <Dashboard isLoggedIn={false} />
      </div>

      <div>
        <h2>Child 3 - User Dashboard</h2>
        <User user={user} isLoggedIn={false} />
        <User user={user} isLoggedIn={true} />
      </div>
    </div>
  );
}

export default App;
