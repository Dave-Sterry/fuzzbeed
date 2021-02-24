import React from 'react';
import SurveyControl from './SurveyControl';
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ProvideAuth } from './use-auth.js';
// import { AuthConfig } from "react-use-auth";
// import { Auth0 } from "react-use-auth/auth0";
import SiteNavBar from "./NavBar";

function App() {

  return (
      <Router>
        <SiteNavBar />
        <Switch>
          <Route path = "/signin">
            <Signin />
          </Route>
          <Route path = "/">
            <SurveyControl />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;