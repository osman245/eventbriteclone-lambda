import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AddEventsPage } from "./pages/AddEventsPage";
import { AddConfirmPage } from "./pages/AddConfirmPage";
import { BuyConfirmPage } from "./pages/BuyConfirmPage";
import { BuyTicketPage } from "./pages/BuyTicketPage";
import { Navbar } from "./components/Navbar";
import "bootstrap";
import "tachyons";

function App() {
  return (
    //pattern: Specifies a regular expression that defines a pattern the entered data needs to follow.implement this in eventForm..
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/addEvent">
            <AddEventsPage />
          </Route>
          <Route path="/buyTicketConfirm">
            <BuyConfirmPage />
          </Route>
          <Route path="/addEventConfirm">
            <AddConfirmPage />
          </Route>
          <Route path="/userticket/:id">
            <BuyTicketPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
