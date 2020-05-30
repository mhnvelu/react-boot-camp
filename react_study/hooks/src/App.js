import React from "react";
import "./App.css";
import CounterClass from "./CounterClass";
import CounterHook from "./hooks/CounterHook";
import Toggler from "./hooks/Toggler";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHook from "./hooks/SimpleFormHook";
import SimpleFormCustomHook from "./hooks/SimpleFormCustomHook";
import Clicker from "./hooks/Clicker";
import SWMovies from "./hooks/SWMovies";

function App() {
  return (
    <div className="App">
      {/* <CounterClass />
      <CounterHook />
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHook />
      <SimpleFormCustomHook />
      <Clicker /> */}
      <SWMovies />
    </div>
  );
}

export default App;
