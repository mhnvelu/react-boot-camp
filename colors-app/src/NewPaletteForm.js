import React, { useState } from "react";
import NewPaletteFormNavbar from "./NewPaletteFormNavbar";
import ColorPickerForm from "./ColorPickerForm";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import { DRAWER_WIDTH as drawerWidth } from "./constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      display: "flex",
      alignItems: "center",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
      alignSelf: "flex-end",
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 96px)",
      padding: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    buttons: {
      width: "100%",
    },
    button: {
      width: "50%",
    },
  })
);

export default function NewPaletteForm(props) {
  const maxColors = 20;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [colors, setColors] = useState(props.palettes[0].colors);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const handleDelete = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const savePalette = (newPaletteNameAndEmoji) => {
    let newPalette = {
      paletteName: newPaletteNameAndEmoji.newPaletteName,
      id: newPaletteNameAndEmoji.newPaletteName
        .toLowerCase()
        .replace(/ /g, "-"),
      emoji: newPaletteNameAndEmoji.emoji,
      colors: colors,
    };
    props.savePalette(newPalette);
    props.routeProps.history.goBack();
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColors = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();
    let random = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[random];
    setColors([...colors, randomColor]);
  };

  const isPaletteFull = colors.length >= maxColors;
  return (
    <div className={classes.root}>
      <NewPaletteFormNavbar
        open={open}
        palettes={props.palettes}
        handleDrawerOpen={handleDrawerOpen}
        savePalette={savePalette}
        history={props.routeProps.history}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" noWrap gutterBottom>
            Design Your Palette
          </Typography>

          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.button}>
              CLEAR PALETTE
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={addRandomColors}
              disabled={isPaletteFull}>
              RANDOM COLOR
            </Button>
          </div>
          <ColorPickerForm
            colors={colors}
            isPaletteFull={isPaletteFull}
            addColor={addColor}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          handleDelete={handleDelete}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
