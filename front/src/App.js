import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register/Form";
import Login from "./Login/Login";
import PrivateRoute from "./shared/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import Kategorite from "./Kategorite/Kategorite";
import ProductsList from "./Products/ProductsList";
import ProductDetails from "./Products/ProductDetails";
import AddProduct from "./Products/AddProduct";
import EditProduct from "./Products/EditProduct";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Kategorite" component={Kategorite} />

          <Route exact path="/produktet" component={ProductsList} />
          <Route exact path="/produktet/regjistro" component={AddProduct} />
          <Route exact path="/produktet/:id" component={ProductDetails} />
          <Route exact path="/produktet/ndrysho/:id" component={EditProduct} />

          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
