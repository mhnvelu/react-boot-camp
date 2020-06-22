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

const drawerWidth = 400;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 64px)",
      padding: theme.spacing(3),
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

  const savePalette = (newPaletteName) => {
    let newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "smile",
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
        classes={classes}
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
        <Typography variant="h4" noWrap>
          Design Your Palette
        </Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            CLEAR PALETTE
          </Button>
          <Button
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
