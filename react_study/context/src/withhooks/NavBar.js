import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Search from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavBarStyles";
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";

const content = {
  english: {
    search: "Search",
    code: "English",
  },
  tamil: {
    search: "தேடல்",
    code: "தமிழ்",
  },
  irish: {
    search: "Cuardaigh",
    code: "Gaeilge",
  },
};

function NavBar(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { search, code } = content[language];
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
        <Toolbar color="inherit">
          <IconButton className={classes.menuButton}>
            <span>{code}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);
