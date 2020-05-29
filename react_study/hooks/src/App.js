import React from "react";
import "./App.css";
import CounterClass from "./CounterClass";
import CounterHook from "./hooks/CounterHook";
import Toggler from "./hooks/Toggler";

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHook />
      <Toggler />
    </div>
  );
}

export default App;
