import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function PageContent(props) {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkTheme ? "black" : "white",
    height: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
}
