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
    color: "white",
  },
  palettes: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3,30%)",
    justifyContent: "center",
    gridGap: "5%",
  },
};

export default styles;
