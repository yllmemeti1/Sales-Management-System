import React from 'react';
import './Dashboard.css';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Dashboard() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
      
        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;