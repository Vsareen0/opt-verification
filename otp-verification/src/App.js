import React from "react";
import Welcome from "./components/Welcome";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Verify from "./components/Verify";
import Success from "./components/Success";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/success" component={Success} />
        <Route path="/verify" component={Verify} />
        <Route path="/" exact component={Welcome} />
      </Switch>
    </>
  );
};

export default App;
