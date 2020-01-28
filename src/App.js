import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine defaultLoc="Delhi,in" />
      <WeatherEngine defaultLoc="Delhi,in" />
      <WeatherEngine defaultLoc="Delhi,in" />
    </div>
  );
}

export default App;
