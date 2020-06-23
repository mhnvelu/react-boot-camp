import { DRAWER_WIDTH as drawerWidth } from "../constants";
import sizes from "./MediaQueries";

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
    alignItems: "center",
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
  navButtons: {
    "& Button": {
      margin: "0 0.5rem",
      [sizes.down("xs")]: {
        margin: "0 0.2rem",
        padding: "0rem",
      },
    },
  },
  hide: {
    display: "none",
  },
});

export default styles;
