import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register/Form";
import Login from "./Login/Login";
import PrivateRoute from "./shared/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import Regjistro from "./Produktet/Regjistro";
import Kategorite from "./Kategorite/Kategorite";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/Regjistro" component={Regjistro}></Route>
          <Route exact path="/Kategorite" component={Kategorite}></Route>
          <Route path="/"></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
