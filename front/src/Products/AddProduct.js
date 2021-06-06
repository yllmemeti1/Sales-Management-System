import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./AddProduct.css";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    categoryId: "1",
    subCategoryId: "1",
    unitsInStock: "",
    price: "",
    discount: "",
  });

  const history = useHistory();

  const addProduct = async () => {
    console.log("Product to add", product);
    try {
      const response = await axios.post("http://localhost:5000/api/Product", {
        ...product,
      });

      history.push("/dashboard");
    } catch (err) {
      alert("Something went wrong while trying to add this product");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <>
      <>
        <Navbar />
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
                type="number"
                placeholder="Euro"
                value={product.price}
                onChange={handleChange}
                name="price"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Zbritje</Form.Label>
              <Form.Control
                type="number"
                placeholder="Zbritje %"
                value={product.discount}
                onChange={handleChange}
                name="discount"
              />
            </Form.Group>
            <Button variant="primary" onClick={addProduct}>
              Shto Produktin
            </Button>
          </Form>
        </div>
      </>
    </>
  );
}

export default AddProduct;
