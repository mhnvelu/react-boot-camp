const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
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
    gridGap: "5%",
  },
  createPalette: {
    marginTop: "1.5rem",
    fontSize: "1.2rem",
  },
};

export default styles;
