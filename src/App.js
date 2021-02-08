import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OrderDescription from "./Pages/OrderDescription";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/order/:id">
          <OrderDescription />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
