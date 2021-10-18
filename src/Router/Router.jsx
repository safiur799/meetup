import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import Home from "./Home";
function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup" exact>
          <LoginForm />
        </Route>
              <Route path="technology" exact>
                  
        </Route>
      </Switch>
    </>
  );
}

export default Router;
