import "./Dashboard.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { BiBuildingHouse } from "react-icons/bi";
import { GoListUnordered } from "react-icons/go";
import { GrDropbox } from "react-icons/gr";
import { RiFileList3Line } from "react-icons/ri";


function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <div class="dashboardBoxes">
          <Row>

            <Col>
              <Link to="/kategorite" style={{ textDecoration: 'none' }}>
                <div class="box1">
                  <GoListUnordered className="icons" />
                  <div class="boxNr">5</div>
                  <div class="boxText">Kategori te listuara</div>
                </div>
              </Link>
            </Col>
            <Col>

              <Link to="/furnitoret" style={{ textDecoration: 'none' }}>
                <div class="box1">
                  <BiBuildingHouse className="icons" />
                  <div class="boxNr">5</div>
                  <div class="boxText">Furnitor te listuar</div>
                </div>
              </Link>
            </Col>
            <Col>

              <Link to="/products" style={{ textDecoration: 'none' }}>
                <div class="box1">
                  <GrDropbox className="icons" />
                  <div class="boxNr">5</div>
                  <div class="boxText">Produkte te regjistuara</div>
                </div>

              </Link>
            </Col>
          </Row>



          <div class="secondRowDashboard">
            <Row >
              <Col>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                  <div class="box1">

                    <RiFileList3Line className="icons" />
                    <div class="boxNr">5</div>
                    <div class="boxText">Shitje Totale</div>
                  </div>
                </Link>
              </Col>

              <Col>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                  <div class="box1">

                    <RiFileList3Line className="icons" />
                    <div class="boxNr">5</div>
                    <div class="boxText">Shitje Ditore</div>
                  </div>
                </Link>
              </Col>

              <Col>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                  <div class="box1">
                    <RiFileList3Line className="icons" />
                    <div class="boxNr">5</div>
                    <div class="boxText">Shitje Javore</div>
                  </div>
                </Link>
              </Col>

            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
