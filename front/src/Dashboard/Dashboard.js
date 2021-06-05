
import './Dashboard.css';
import React, { useState } from "react";
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
        <Col><div class="box1"><div class="box2">Kategori te listuara</div></div></Col>
        <Col><div class="box1"><div class="box2">Kompani te listuara</div></div></Col>
        <Col><div class="box1"><div class="box2">Produkte te regjistuara</div></div></Col>
      </Row>
      <Row>
        
        <Col><div class="box1"><div class="box2">Shitje Totale</div></div></Col>
        <Col><div class="box1"><div class="box2">Shitje Ditore</div></div></Col>
        <Col><div class="box1"><div class="box2">Shitje Javore</div></div></Col>
      </Row>
      </Container>
      
       
     
    </>
  );
}

export default Dashboard;