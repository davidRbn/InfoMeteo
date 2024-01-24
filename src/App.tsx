import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import "./font/font.scss";
import VideoBackground from "./components/videoBackground/VideoBackground";

function App() {
  return (
    <div className="App">
      <VideoBackground />

      <header>
        <div className="containerTitle">
          <h1>InfoMeteo</h1>
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
