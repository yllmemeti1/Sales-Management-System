import "./Dashboard.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import  { BiBuildingHouse } from "react-icons/bi";
import {GoListUnordered} from "react-icons/go";
import {GrDropbox} from "react-icons/gr";
import {RiFileList3Line} from "react-icons/ri";
function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <div class="box1">
              <Link to="/dashboard">
              <GoListUnordered className="icons"/>
                <div class="box2">Kategori te listuara</div>
              </Link>
            </div>
          </Col>
          <Col>
            <div class="box1">
              <Link to="/furnitoret">
              <BiBuildingHouse className="icons" />
                <div class="box2">Furnitor te listuar</div>
              </Link>
            </div>
          </Col>
          <Col>
            <div class="box1">
              <Link to="/produktet">
             <GrDropbox className="icons" />
                <div class="box2">Produkte te regjistuara</div>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="box1">
              <Link to="/dashboard">
                <RiFileList3Line className="icons"/>
                <div class="box2">Shitje Totale</div>
              </Link>
            </div>
          </Col>
          <Col>
            <div class="box1">
              <Link to="/dashboard">
                <RiFileList3Line  className="icons"/>
                <div class="box2">Shitje Ditore</div>
              </Link>
            </div>
          </Col>
          <Col>
            <div class="box1">
              <Link to="/dashboard">
              <RiFileList3Line className="icons"/>
                <div class="box2">Shitje Javore</div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
