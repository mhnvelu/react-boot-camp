import sizes from "./MediaQueries";
const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    [sizes.down("md")]: {
      width: "80%",
    },
    [sizes.down("sm")]: {
      width: "70%",
    },
    [sizes.down("xs")]: {
      width: "60%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3,30%)",
    justifyContent: "center",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
      gridGap: "1.5rem",
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(1,70%)",
      gridGap: "1.5rem",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,90%)",
      gridGap: "1.5rem",
    },
  },
  createPalette: {
    marginTop: "1.5rem",
    fontSize: "1.2rem",
  },
};

export default styles;
