import Navbar from '../Navbar/Navbar';
import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Form } from 'react-bootstrap';
import "./Kategorite.css";
export default function Kategorite() {

  const apiURL="http://localhost:63717/api/Category";
  
  const getKategorite = () => {
    axios.get(apiURL).then((response) => {

      const allKategories = response.data.kategorite.allKategories;
    })
    .catch(error => console.error('Error: ${error}'));
  }

 
    
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
