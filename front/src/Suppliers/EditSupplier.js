import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Button, Form } from "react-bootstrap";
import "../Products/AddProduct.css";
import axios from "axios";

function EditSupplier() {
  const [supplier, setSupplier] = useState({});

  const params = useParams();
  const history = useHistory();

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:63717/api/supplier/${params.id}`
      );
      setSupplier(response.data);
    } catch (err) {
      history.push("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const editSupplier = async () => {
    try {
      const response = await axios.put(
        `http://localhost:63717/api/supplier/${params.id}`,
        {
          ...supplier,
        }
      );
      history.push("/furnitoret");
    } catch (err) {
      alert("Something went wrong while trying to edit this supplier");
    }
  };

  return (
    <>
      <Navbar />
      {supplier && (
        <div class="forma1">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Emri i Supplier</Form.Label>
              <Form.Control
                value={supplier.name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Emri i Supplier"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Nr i telefonit te Supplier</Form.Label>
              <Form.Control
                value={supplier.contact}
                onChange={handleChange}
                name="contact"
                type="text"
                placeholder="Nr i telefonit te Supplier"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Adresa e Supplier</Form.Label>
              <Form.Control
                value={supplier.address}
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Adresa e supplier"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email i Supplier</Form.Label>
              <Form.Control
                value={supplier.email}
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Email i Supplier"
              />
            </Form.Group>
            <Button variant="primary" onClick={editSupplier}>
              Ndrysho Supplier
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditSupplier;
