import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Search from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
class NavBar extends Component {
  //consume a context
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    const { isDarkTheme, toggleTheme } = this.context;
    const { classes } = this.props;
    return (
      <LanguageContext.Consumer>
        {(contextValue) => (
          <div className={classes.root}>
            <AppBar
              position="static"
              color={isDarkTheme ? "default" : "primary"}>
              <Toolbar color="inherit">
                <IconButton className={classes.menuButton}>
                  <span>IE</span>
                </IconButton>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="inherit">
                  App Title {contextValue.language}
                </Typography>
                <Switch onChange={toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <Search />
                  </div>
                  <InputBase
                    placeholder="Search..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default withStyles(styles)(NavBar);
