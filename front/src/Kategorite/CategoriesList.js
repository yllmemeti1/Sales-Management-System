import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./CategoriesList.css";
import DatePicker from "react-date-picker";
import Calendar from "react-calendar";

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [categoryToDeleteId, setCategoryToDeleteId] = useState(null);

  const handleClose = () => setDeleteModal(false);
  const handleShow = () => setDeleteModal(true);

  useEffect(async () => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:63717/api/category");
      setCategories(response.data);
    };

    try {
      await getCategories();
    } catch (err) {
      alert("Something went wrong while trying to get categories");
    }
  }, []);

  const deleteCategory = async () => {
    if (categoryToDeleteId) {
      try {
        await axios.delete(
          `http://localhost:63717/api/category/${categoryToDeleteId}`
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const filterCategoriesByDate = async () => {
    console.log("Start", startDate.toISOString());
    console.log("End", endDate.toISOString());

    const getCategories = async () => {
      const response = await axios.get(
        `http://localhost:63717/api/category?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
      );
      console.log(response);
      setCategories(response.data);
    };

    try {
      await getCategories();
    } catch (err) {
      alert("Something went wrong while trying to add this category");
    }
  };

  // const [date, setDate] = useState(new Date());
  // const onChangeDate1 = date => {
  //   setDate(date);
  // }
  // const [date2, setDate2] = useState(new Date());
  // const onChangeDate2 = date2 => {
  //   setDate2(date2);
  // }

  return (
    <>
      <Navbar />
      {/* <div class="calendar" >
        <div class="calendar1">
          <h2 class="calendarheading">Fillimi</h2>
          <Calendar
            onChange={onChangeDate1}
            value={date}
            
          />
         
        </div>
        <div class="date1">
          {date.toString()}
          </div>
        <div class="calendar2">
          <h2 class="calendarheading">Mbarimi</h2>
          <Calendar
            onChange={onChangeDate2}
            value={date2}
          />
        </div>
        <div class="date1">
        {date2.toString()}
        </div>
      </div> */}
      <div style={{ marginBottom: "30px" }}>
        <div class="dateTitle">Filtro në bazë të datës</div>
        <div class="firstDatePicker">
          <div class="nga">Nga:</div>
          <DatePicker onChange={setStartDate} value={startDate} />
        </div>
        <div class="secondDatePicker">
          Deri më:
          <DatePicker onChange={setEndDate} value={endDate} />
        </div>
        <div class="filtroButton">
        <Button variant="primary"  onClick={filterCategoriesByDate}>
          Filtro
        </Button>
        </div>
      </div>
      {categories && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "lightblue",
            borderColor: "black",
          }}
        >
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Emri Kategorise</th>
                <th>
                  <div class="bttn1">
                    <Link to="/kategorite/AddCategories.js">
                      <Button class=" btn btn-primary " type="submit">
                        Shto Kategorine
                      </Button>
                    </Link>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr>
                  <td>{category.name}</td>

                  <td>
                    <div style={{ display: "flex", borderColor: "black" }}>
                      <Link to={`/kategorite/ndrysho/${category.id}`}>
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
