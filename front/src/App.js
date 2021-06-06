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
import SuppliersList from "./Suppliers/SupplierList";
import AddSupplier from "./Suppliers/AddSupplier";
import SupplierDetails from "./Suppliers/SupplierDetails";
import EditSupplier from "./Suppliers/EditSupplier";

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

          <Route exact path="/furnitoret" component={SuppliersList} />
          <Route exact path="/furnitoret/regjistro" component={AddSupplier} />
          <Route exact path="/furnitoret/:id" component={SupplierDetails} />
          <Route
            exact
            path="/furnitoret/ndrysho/:id"
            component={EditSupplier}
          />

          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
