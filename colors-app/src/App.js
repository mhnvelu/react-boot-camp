import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./ColorHelper";
function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette List</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Individual Palette</h1>}
      />
    </Switch>

    /* <div className="App">
      <Palette {...generatePalette(seedColors[4])} />
    </div> */
  );
}

export default App;
