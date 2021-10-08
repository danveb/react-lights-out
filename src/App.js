import React from "react";
import Board from "./components/Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1>React Lights Out</h1> 
      <h4>Make the entire board blue to win <span role="img" aria-label="trophy">🏆</span></h4>
      <Board  />
    </div>
  );
}

export default App;
