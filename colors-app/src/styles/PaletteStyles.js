import sizes from "./MediaQueries";
const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  PaletteColors: {
    height: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  goBack: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "50%",
    // margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    opacity: "1",
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
  backButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100px",
    height: "30px",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "20px",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default styles;
