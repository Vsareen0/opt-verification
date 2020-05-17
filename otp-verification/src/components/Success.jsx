import React from "react";
import logo from "./success.PNG";

const Success = () => {
  return (
    <div id="main" style={styles.main}>
      <img src={logo} alt={logo} />
      <h1 style={styles.h1}>Welcome to AdmitKard</h1>
      <p style={styles.p}>In order to provide tou.....</p>
    </div>
  );
};

const styles = {
  main: {
    width: "90vw",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  h1: {
    marginTop: "50px",
    fontFamily: "sans-serif",
    fontWeight: "600",
    fontSize: "2em",
  },
  p: {
    fontFamily: "sans-serif",
  },
};

export default Success;
