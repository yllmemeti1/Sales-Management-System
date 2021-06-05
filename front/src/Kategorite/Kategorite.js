import Navbar from '../Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Button,Form } from 'react-bootstrap';
import "./Kategorite.css";
function Kategorite() {
    return (
      <>
      <Navbar />
      <div class="forma1">
       <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Emri i Kategorise</Form.Label>
    <Form.Control type="text" placeholder="Emri i Kategorise..." />
  </Form.Group>
 
  <Button variant="primary">Shto Kategorine</Button>
</Form>
</div>
        
         
       
      </>
    );
  }
  
  export default Kategorite;