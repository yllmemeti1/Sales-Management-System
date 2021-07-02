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

function EditSale() {
  const [sale, setSale] = useState({});

  const params = useParams();
  const history = useHistory();

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:63717/api/sale/${params.id}`
      );
      setSale(response.data);
    } catch (err) {
      history.push("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSale({ ...sale, [name]: value });
  };

  const editSale = async () => {
    try {
      const response = await axios.put(
        `http://localhost:63717/api/sale/${params.id}`,
        {
          ...sale,
        }
      );
      history.push("/furnitoret");
    } catch (err) {
      alert("Something went wrong while trying to edit this sale");
    }
  };

  return (
    <>
      <Navbar />
      {sale && (
        <div class="forma1">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>ID e fatures</Form.Label>
              <Form.Control
                value={sale.InvoiceId}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="ID e fatures"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>ID e perdoruesit</Form.Label>
              <Form.Control
                value={sale.UserId}
                onChange={handleChange}
                name="contact"
                type="text"
                placeholder="ID e Perdoruesit"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Sasia</Form.Label>
              <Form.Control
                value={sale.Quantity}
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Sasia"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Qmimi per Njesi</Form.Label>
              <Form.Control
                value={sale.UnitPrice}
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Qmimi per Njesi"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Zbritja</Form.Label>
              <Form.Control
                value={sale.Discount}
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Zbritja"
              />
            </Form.Group>
            <Button variant="primary" onClick={editSale}>
              Ndrysho Shitjen
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditSale;
