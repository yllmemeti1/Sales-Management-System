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
import "./AddProduct.css";
import axios from "axios";

function EditProduct() {
  const [product, setProduct] = useState({});

  const params = useParams();
  const history = useHistory();

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/Product/${params.id}`
      );
      setProduct(response.data);
    } catch (err) {
      history.push("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const editProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/Product/${params.id}`,
        {
          ...product,
        }
      );
      history.push("/produktet");
    } catch (err) {
      alert("Something went wrong while trying to edit this product");
    }
  };

  return (
    <>
      <Navbar />
      {product && (
        <div class="forma1">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Emri i Produktit</Form.Label>
              <Form.Control
                value={product.name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Emri Produktit"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Kategoria</Form.Label>
              <Form.Control
                as="select"
                value={product.categoryId}
                onChange={handleChange}
                name="categoryId"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Nën kategoria</Form.Label>
              <Form.Control
                as="select"
                value={product.subCategoryId}
                onChange={handleChange}
                name="subCategoryId"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Njesi ne Stock</Form.Label>
              <Form.Control
                value={product.unitsInStock}
                onChange={handleChange}
                name="unitsInStock"
                type="number"
                placeholder="Njesi"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Qmimi</Form.Label>
              <Form.Control
                value={product.price}
                onChange={handleChange}
                name="price"
                type="number"
                placeholder="Euro"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Zbritje</Form.Label>
              <Form.Control
                value={product.discount}
                onChange={handleChange}
                name="discount"
                type="number"
                placeholder="Zbritje %"
              />
            </Form.Group>
            <Button variant="primary" onClick={editProduct}>
              Ndrysho Produktin
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditProduct;
