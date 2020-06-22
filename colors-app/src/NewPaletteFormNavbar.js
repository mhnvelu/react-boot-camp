import React, { useState, useEffect } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function NewPaletteFormNavbar(props) {
  const {
    classes,
    open,
    palettes,
    handleDrawerOpen,
    savePalette,
    history,
  } = props;
  const [newPaletteName, setNewPaletteName] = useState("");

  const handlePaletteName = (e) => {
    setNewPaletteName(e.target.value);
  };

  const handleSavePalette = () => {
    savePalette(newPaletteName);
  };

  const handleGoBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const setValidation = () => {
      ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
        palettes.every(
          ({ paletteName }) =>
            paletteName.toLowerCase() !== newPaletteName.toLowerCase()
        )
      );
    };
    setValidation();
  });

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
          <ValidatorForm onSubmit={handleSavePalette}>
            <TextValidator
              label="Palette Name"
              onChange={handlePaletteName}
              name="paletteName"
              value={newPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already exists"]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>

          <Button variant="contained" color="secondary" onClick={handleGoBack}>
            Go Back
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NewPaletteFormNavbar;
