import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import Register from '.Register/Form';
import Login from './Login/Login.js';


function App() {
  return (
   
   
    
    <div className="wrapper">
     
  
    <BrowserRouter>
    
      <Switch>
      <Login />
        <Route exact path="./Login/Login.js" exact  component='Login'>
        
         
        </Route>
        <Route path="/">
         
        </Route>
      </Switch>
    </BrowserRouter>
</div>
);
  
}

export default App;
