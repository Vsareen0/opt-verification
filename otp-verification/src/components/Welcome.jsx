import React, { Component } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import logo from "./logo.png";
import { Redirect } from "react-router-dom";

class Welcome extends Component {
  state = { phone: "", complete: false };

  handleChange = (phone) => {
    this.setState({ phone });
    if (phone.length === 12) {
      this.setState({ complete: true });
    }
  };
  render() {
    const { phone } = this.state;
    if (this.state.complete === true) {
      return <Redirect to={{ pathname: "/verify", state: { phone } }} />;
    }
    return (
      <div id="main" style={styles.main}>
        <img src={logo} alt="AdmitKard" />
        <h1 style={styles.h1}>Welcome Back</h1>
        <p id="msg" style={styles.msg}>
          Please sign in to your account
        </p>
        <center>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => this.handleChange(phone)}
            style={styles.input}
          />
        </center>
        <p id="note" style={styles.note}>
          We will send you one time sms message. Charges may apply.
        </p>
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
  h1: {
    marginTop: "50px",
    fontFamily: "Inter, sans-serif;",
    fontWeight: "400",
    fontSize: "1.5em",
  },
  input: {
    marginTop: "40px",
  },
  msg: {
    fontFamily: "sans-serif",
  },
  note: {
    marginTop: "40px",
    fontFamily: "sans-serif",
  },
};

export default Welcome;
