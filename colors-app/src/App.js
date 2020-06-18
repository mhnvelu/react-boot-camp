import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./ColorHelper";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
function App() {
  const findPalette = (id) => {
    let palette = seedColors.find((palette) => {
      return palette.id === id;
    });
    return palette;
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={seedColors} routeProps={routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            {...generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />

      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => <SingleColorPalette />}
      />
    </Switch>
  );
}

export default App;
