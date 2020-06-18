import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./ColorHelper";
function App() {
  const findPalette = (id) => {
    console.log(id);
    let palette = seedColors.find((palette) => {
      return palette.id === id;
    });
    return palette;
  };

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette List</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            {...generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>

    /* <div className="App">
      <Palette {...generatePalette(seedColors[4])} />
    </div> */
  );
}

export default App;
