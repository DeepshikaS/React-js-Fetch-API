import React, { Component } from "react";
import Fr from "./components/Fetch_api";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <p>RANDOM USER</p>
        <Fr></Fr>
      </div>
    </div>
  );
}

export default App;
