import React from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';


function Dashboard() {
  return (
    <>
     <Navbar />
     <Container>
      <Row>
        <Col><div class="box1"><div class="box2">Kompania</div></div></Col>
        <Col><div class="box1"></div></Col>
        <Col><div class="box1"></div></Col>
      </Row>
      <Row>
        
        <Col><div class="box1"></div></Col>
        <Col><div class="box1"></div></Col>
        <Col><div class="box1"></div></Col>
      </Row>
      </Container>
    
       
        
          
     
       
     
    </>
  );
}

export default Dashboard;