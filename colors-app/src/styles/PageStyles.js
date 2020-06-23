const styles = {
  "@global": {
    ".page-enter": {
      opacity: 0,
    },
    ".page-enter-active": {
      opacity: 1,
    },
    ".page-exit-active": {
      opacity: 0,
    },
  },
  root: {
    height: "100vh",
    position: "fixed",
    width: "100%",
    top: 0,
    transition: "opacity 0.5s ease-in-out",
  },
};

export default styles;
