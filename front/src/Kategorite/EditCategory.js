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
import "./AddCategories.css";
import axios from "axios";

function EditCategory() {
  const [category, setCategory] = useState({});

  const params = useParams();
  const history = useHistory();

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:63717/api/category/${params.id}`
      );
      setCategory(response.data);
    } catch (err) {
      history.push("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const editCategory = async () => {
    try {
      const response = await axios.put(
        `http://localhost:63717/api/category/${params.id}`,
        {
          ...category,
        }
      );
      history.push("/categories");
    } catch (err) {
      alert("Something went wrong while trying to edit this Category");
    }
  };

  return (
    <>
      <Navbar />
      {category && (
        <div class="forma1">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Emri i Kategories</Form.Label>
              <Form.Control
                value={category.name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Emri Produktit"
              />
            </Form.Group>
            
            <Button variant="primary" onClick={editCategory}>
              Ndrysho Kategorine
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditCategory;
