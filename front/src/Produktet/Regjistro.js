import Navbar from '../Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Button,Form } from 'react-bootstrap';
import "./Regjistro.css";
function Regjistro() {
    return (
      <>
      <Navbar />
      <div class="forma1">
       <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Emri i Produktit</Form.Label>
    <Form.Control type="text" placeholder="Emri Produktit" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Kategoria</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Nën kategoria</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Njesi ne Stock</Form.Label>
    <Form.Control type="number" placeholder="Njesi" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Qmimi</Form.Label>
    <Form.Control type="number" placeholder="Euro" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Zbritje</Form.Label>
    <Form.Control type="number" placeholder="Zbritje %" />
  </Form.Group>
  <Button variant="primary">Shto Produktin</Button>
</Form>
</div>
        
         
       
      </>
    );
  }
  
  export default Regjistro;