import sizes from "./MediaQueries";
const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "5vh",
  },

  /* logo */
  logo: {
    marginRight: "15px",
    padding: "0 14px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontFamily: "Roboto",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },

  /* Slider */
  slider: {
    width: "350px",
    margin: "0 20px",
    display: "inline-block",

    "& .rc-slider-track": {
      background: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    " & .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px",
      marginLeft: "-7px",
    },

    [sizes.down("sm")]: {
      width: "150px",
    },
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

export default styles;
