import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./AddCustomer.css";
import axios from "axios";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    FirstName: "",
    LastName: "",
    Contact: "",
    Address: "",
    
  });

  const history = useHistory();

  const addCustomer = async () => {
    console.log("Customer to add", customer);
    try {
      const response = await axios.post("http://localhost:5000/api/Customer", {
        ...customer,
      });

      history.push("/dashboard");
    } catch (err) {
      alert("Something went wrong while trying to add this customer");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <>
      <>
        <Navbar />
        <div class="forma1">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Emri i Konsumatorit</Form.Label>
              <Form.Control
                value={customer.FirstName}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Emri Konsumatorit"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Mbiemri i Konsumatorit</Form.Label>
              <Form.Control
                value={customer.LastName}
                onChange={handleChange}
                name="lastname"
                type="text"
                placeholder="Mbiemri Konsumatorit"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Kontakti</Form.Label>
              <Form.Control
                value={customer.Contact}
                onChange={handleChange}
                name="contact"
                type="text"
                placeholder="Kontakti Konsumatorit"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Kontakti</Form.Label>
              <Form.Control
                value={customer.Address}
                onChange={handleChange}
                name="adress"
                type="text"
                placeholder="Adresa Konsumatorit"
              />
            </Form.Group>
           
            <Button variant="primary" onClick={addCustomer}>
              Shto Konsumatorin
            </Button>
          </Form>
        </div>
      </>
    </>
  );
}

export default AddCustomer;
