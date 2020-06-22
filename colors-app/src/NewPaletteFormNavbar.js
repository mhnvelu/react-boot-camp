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
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navButtons: {},
});

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
    <div className={classes.root}>
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
        </Toolbar>
        <div className={classes.navButtons}>
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGoBack}>
              Go Back
            </Button>
          </ValidatorForm>
        </div>
      </AppBar>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNavbar);
