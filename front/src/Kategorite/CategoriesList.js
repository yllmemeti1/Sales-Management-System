import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import './CategoriesList.css'

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [categoryToDeleteId, setCategoryToDeleteId] = useState(null);

  const handleClose = () => setDeleteModal(false);
  const handleShow = () => setDeleteModal(true);

  useEffect(async () => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:5000/api/Category");
      setCategories(response.data);
    };

    try {
      await getCategories();
    } catch (err) {
      alert("Something went wrong while trying to add this category");
    }
  }, []);

  const deleteCategory = async () => {
    if (categoryToDeleteId) {
      try {
        await axios.delete(
          `http://localhost:5000/api/Category/${categoryToDeleteId}`
        );

        setCategories(categories.filter((c) => c.id !== categoryToDeleteId));
        handleClose();
      } catch (err) {
        alert("Something went wrong while trying to delete this category");
      }
    }
  };

  const handleDeleteDialog = (id) => {
    handleShow();
    setCategoryToDeleteId(id);
  };

  return (
    <>
      <Navbar />
      <Link to="/kategorite/AddCategories.js">
              <Button class="bttn1" variant="secondary" type="submit">
                Shto Kategorine
              </Button>
            </Link>
      {categories && (
        <div style={{ padding: "50px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr>
                  <td>{category.name}</td>
                  
                  <td>
                    <div style={{ display: "flex" }}>
                      <Link to={`/categories/ndrysho/${category.id}`}>
                        <Button
                          style={{ marginRight: "5px" }}
                          variant="primary"
                        >
                          Ndrysho
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleDeleteDialog(category.id)}
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
          <Modal.Title>Fshij kategorine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A je i sigurt qe deshiron te fshish kete kategori?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Mbyll
          </Button>
          <Button onClick={deleteCategory} variant="danger">
            Fshij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoriesList;
