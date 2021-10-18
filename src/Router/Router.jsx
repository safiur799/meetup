import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/signup" exact>
          <LoginForm />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
