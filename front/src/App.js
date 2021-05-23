import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register/Form";
import Login from "./Login/Login";
import PrivateRoute from "./shared/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
