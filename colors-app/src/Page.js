import React from "react";
import styles from "./styles/PageStyles";
import { withStyles } from "@material-ui/styles";
function Page(props) {
  return <section className={props.classes.root}>{props.children}</section>;
}

export default withStyles(styles)(Page);
