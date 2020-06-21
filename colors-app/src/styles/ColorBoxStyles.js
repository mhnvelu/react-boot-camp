import chroma from "chroma-js";

const styles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showMore ? "25%" : "50%"),
    // margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.6 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.09 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.6 ? "black" : "white",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    padding: "10px",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
    width: "40px",
    height: "10px",
    lineHeight: "10px",
  },
  copyButton: {
    position: "absolute",
    color: (props) =>
      chroma(props.color).luminance() >= 0.6 ? "black" : "white",
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
    border: "none",
    cursor: "pointer",
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 1s ease-in-out",
  },
  showOverlay: {
    opacity: "1",
    zIndex: "10",
    /* position : absolute will take the overlay container out of document flow */
    position: "absolute",
    transform: "scale(50)",
  },

  copyMsg: {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: "white",
    transform: "scale(0.1)",
    opacity: "0",

    "& h1": {
      width: "100%",
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      textAlign: "center",
      padding: "1rem",
      marginBottom: "0",
    },

    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showCopyMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.6s ease-in-out",
    transitionDelay: "0.8s",
  },
};

export default styles;
