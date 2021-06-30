import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

function SalesList() {
  const [sales, setSales] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [saleToDeleteId, setSaleToDeleteId] = useState(null);

  const handleClose = () => setDeleteModal(false);
  const handleShow = () => setDeleteModal(true);

  useEffect(async () => {
    const getSales = async () => {
      const response = await axios.get("http://localhost:5000/api/sale");
      setSales(response.data);
    };

    await getSales();
  }, []);

  const deleteSale = async () => {
    if (saleToDeleteId) {
      try {
        await axios.delete(`http://localhost:5000/api/sale/${saleToDeleteId}`);

        setSales(sales.filter((p) => p.id !== saleToDeleteId));
        handleClose();
      } catch (err) {
        alert("Something went wrong while trying to delete this sale");
      }
    }
  };

  const handleDeleteDialog = (id) => {
    handleShow();
    setSaleToDeleteId(id);
  };

  return (
    <>
      <Navbar />
      <Link to="/sales/regjistro">
        <Button class=" btn btn-primary " type="submit">
          Shto Shitje
        </Button>
      </Link>
      {sales && (
        <div style={{ padding: "50px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID e fatures</th>
                <th>Id e perdoruesit</th>
                <th>Sasia</th>
                <th>Qmimi Njesi</th>
                <th>Zbritja</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr>
                  <td>{sale.InvoiceId}</td>
                  <td>{sale.UserId}</td>
                  <td>{sale.Quantity}</td>
                  <td>{sale.UnitPrice}</td>
                  <td>{sale.Discount}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Link to={`/sales/ndrysho/${sale.id}`}>
                        <Button
                          style={{ marginRight: "5px" }}
                          variant="primary"
                        >
                          Ndrysho
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleDeleteDialog(sale.id)}
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
          <Modal.Title>Fshij furnitorin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A je i sigurt qe deshiron te fshish kete furnitor?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Mbyll
          </Button>
          <Button onClick={deleteSale} variant="danger">
            Fshij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SalesList;
