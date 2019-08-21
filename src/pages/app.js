import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import Login from "../components/login";
import PrivateRoute from "../components/privateRoute";

const App = () => (
  <Layout>
    <div>
      <h1>APP</h1>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
      </Router>
    </div>
  </Layout>
);

export default App;
