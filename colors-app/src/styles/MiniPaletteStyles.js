const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  minibox: {
    width: "20%",
    height: "25%",
  },
  deleteIcon: {
    position: "absolute",
    top: "0px",
    right: "0px",
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    padding: "10px",
    borderRadius: "5px",
    opacity: 0,
  },
};

export default styles;
