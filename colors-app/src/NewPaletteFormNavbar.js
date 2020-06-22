import React, { useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import NewPaletteMetaForm from "./NewPaletteMetaForm";
import styles from "./styles/NewPaletteFormNavbarStyles";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

function NewPaletteFormNavbar(props) {
  const {
    classes,
    open,
    palettes,
    handleDrawerOpen,
    savePalette,
    history,
  } = props;

  const [isFormShowing, setIsFormShowing] = useState(false);

  const handleGoBack = () => {
    history.goBack();
  };

  const showForm = () => {
    setIsFormShowing(true);
  };

  const closeForm = () => {
    setIsFormShowing(false);
  };

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
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtons}>
          <Button variant="contained" color="secondary" onClick={handleGoBack}>
            Go Back
          </Button>
          <Button variant="outlined" color="primary" onClick={showForm}>
            Save Palette
          </Button>
        </div>
      </AppBar>
      {isFormShowing && (
        <NewPaletteMetaForm
          palettes={palettes}
          savePalette={savePalette}
          closeForm={closeForm}
        />
      )}
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNavbar);
