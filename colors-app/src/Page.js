import React from "react";
import styles from "./styles/PageStyles";
import { withStyles } from "@material-ui/styles";
function Page(props) {
  const { classes, children } = props;
  return <section className={classes.root}>{children}</section>;
}

export default withStyles(styles)(Page);
