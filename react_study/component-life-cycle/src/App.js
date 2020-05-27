import React from "react";
import "./App.css";
import ZenQuote from "./ZenQuote";
import GithubUserInfo from "./GithubUserInfo";

function App() {
  return (
    <div className="App">
      <ZenQuote />
      <GithubUserInfo username="facebook" />
    </div>
  );
}

export default App;
