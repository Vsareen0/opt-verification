import React, { Component } from "react";
import verifyImg from "./verify.PNG";
import { Redirect } from "react-router-dom";

class Verify extends Component {
  state = { pin1: "", pin2: "", pin3: "", pin4: "", otp: "1234" };

  constructor() {
    super();
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
  }

  render() {
    const { phone } = this.props.location.state;
    const { pin1, pin2, pin3, pin4, otp } = this.state;

    const res = pin1 + "" + pin2 + "" + pin3 + "" + pin4;
    if (res === otp) {
      return <Redirect to={{ pathname: "/success", state: { phone } }} />;
    }

    console.log(pin1);
    return (
      <div id="main" style={styles.main}>
        <img src={verifyImg} alt="OTP Verification" />
        <h1 style={styles.h1}>Please verify mobile number</h1>
        <p>An OPT is send to +{phone}</p>
        <div id="otp">
          <input
            onChange={(pin1) => {
              this.setState({ pin1: pin1.currentTarget.value });
              if (pin1 !== "") {
                this.ref2.current.focus();
              }
            }}
            ref={this.ref1}
            value={pin1}
            maxLength={1}
            autoFocus
            style={styles.input}
          />
          <input
            onChange={(pin2) => {
              this.setState({ pin2: pin2.currentTarget.value });
              if (pin2 !== "") {
                this.ref3.current.focus();
              }
            }}
            ref={this.ref2}
            value={pin2}
            maxLength={1}
            style={styles.input}
          />
          <input
            onChange={(pin3) => {
              this.setState({ pin3: pin3.currentTarget.value });
              if (pin3 !== "") {
                this.ref4.current.focus();
              }
            }}
            ref={this.ref3}
            value={pin3}
            maxLength={1}
            style={styles.input}
          />
          <input
            onChange={(pin4) => {
              this.setState({ pin4: pin4.currentTarget.value });
            }}
            ref={this.ref4}
            value={pin4}
            maxLength={1}
            style={styles.input}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    width: "90vw",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#f5f3f1",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "1.2em",
    width: "10px",
    padding: "10px",
    color: "black",
    marginTop: "40px",
    marginLeft: "20px",
    outline: 0,
    borderRadius: "10px",
    border: "none",
    boxShadow: "-2px -2px 3px 4px rgba(45, 45, 45, 0.3)",
  },
  h1: {
    marginTop: "50px",
    fontFamily: "Inter, sans-serif;",
    fontWeight: "400",
    fontSize: "1.5em",
  },
};

export default Verify;
