import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [productToDeleteId, setProductToDeleteId] = useState(null);

  const handleClose = () => setDeleteModal(false);
  const handleShow = () => setDeleteModal(true);

  useEffect(async () => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:63717/api/Product");
      setProducts(response.data);
    };

    try {
      await getProducts();
    } catch (err) {
      alert("Something went wrong while trying to add this product");
    }
  }, []);

  const deleteProduct = async () => {
    if (productToDeleteId) {
      try {
        await axios.delete(
          `http://localhost:63717/api/Product/${productToDeleteId}`
        );

        setProducts(products.filter((p) => p.id !== productToDeleteId));
        handleClose();
      } catch (err) {
        alert("Something went wrong while trying to delete this product");
      }
    }
  };

  const handleDeleteDialog = (id) => {
    handleShow();
    setProductToDeleteId(id);
  };

  return (
    <>
      <Navbar />
      {products && (
        <div style={{ padding: "50px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
             
                <th>Stock</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.category.name}</td>
                 
                  <td>{product.unitsInStock}</td>
                  <td>{product.price}</td>
                  <td>{product.insertedAt}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Link to={`/produktet/ndrysho/${product.id}`}>
                        <Button
                          style={{ marginRight: "5px" }}
                          variant="primary"
                        >
                          Ndrysho
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleDeleteDialog(product.id)}
                        variant="danger"
                      >
                        Fshij
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <Modal show={deleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fshij produktin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A je i sigurt qe deshiron te fshish kete produkt?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Mbyll
          </Button>
          <Button onClick={deleteProduct} variant="danger">
            Fshij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductsList;
