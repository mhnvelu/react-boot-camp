import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./ColorHelper";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
function App() {
  const [palettes, setPalettes] = useState(seedColors);
  const findPalette = (id) => {
    let palette = palettes.find((palette) => {
      return palette.id === id;
    });
    return palette;
  };

  const savePalette = (newPalette) => {
    console.log(newPalette);
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={palettes} routeProps={routeProps} />
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
        render={(routeProps) => (
          <SingleColorPalette
            routeProps={routeProps}
            colorId={routeProps.match.params.colorId}
            {...generatePalette(findPalette(routeProps.match.params.paletteId))}
          />
        )}
      />

      <Route
        exact
        path="/create-palette"
        render={(routeProps) => (
          <NewPaletteForm
            savePalette={savePalette}
            palettes={palettes}
            routeProps={routeProps}
          />
        )}
      />
    </Switch>
  );
}

export default App;
