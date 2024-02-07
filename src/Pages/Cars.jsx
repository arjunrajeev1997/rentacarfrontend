import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Cars.css";

import Modal from "react-bootstrap/Modal";
import Header from "../Components/Header";

function Cars() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="display " style={{ padding: "1rem 0" }}>
         <Header></Header>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Card
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="mt-3 mb-2 bg-light ms-3"
            style={{ width: "26rem", height: "31rem" }}
          >
            <div>
              <Card.Img
                className="cardimg"
                style={{ width: "100%", height: "14.5rem" }}
                variant="top"
                src="https://i.postimg.cc/pLvYd4WC/download-13.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title className="text-dark text-center fw-bolder fs-4">
                Maruti Suzuki Swift
              </Card.Title>
              <Card.Text className="text-center">
                1200 Rs/ day <br />
                <hr />
                <div className="d-flex flex-row justify-content-evenly">
                  <div>
                    <p>seat (4+1)</p>
                    <p>TYPE: gg </p>
                  </div>
                  <div>
                    <p>TYPE: gg </p>
                    <p>TYPE: gg </p>
                  </div>
                </div>
              </Card.Text>
              <Button
                onClick={handleShow}
                style={{ marginLeft: "30%", width: "40%" }}
                className="btn-sm btn-dark "
              >
                RENT
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Card
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="mt-3 mb-2 bg-light ms-3"
            style={{ width: "26rem", height: "31rem" }}
          >
            <div>
              <Card.Img
                className="cardimg"
                style={{ width: "100%", height: "15rem" }}
                variant="top"
                src="https://i.postimg.cc/hPV4r39H/download-14.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title className="text-dark text-center fw-bolder fs-4">
                Wagon r
              </Card.Title>
              <Card.Text className="text-center">
                1200 Rs/ day <br />
                <hr />
                <div className="d-flex flex-row justify-content-evenly">
                  <div>
                    <p>seat (4+1)</p>
                    <p>TYPE: gg </p>
                  </div>
                  <div>
                    <p>TYPE: gg </p>
                    <p>TYPE: gg </p>
                  </div>
                </div>
              </Card.Text>
              <Button
                onClick={handleShow}
                style={{ marginLeft: "30%", width: "40%" }}
                className="btn-sm btn-dark "
              >
                RENT
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="mt-3 mb-2 bg-light ms-3"
            style={{ width: "26rem", height: "31rem" }}
          >
            <div>
              <Card.Img
                className="cardimg"
                style={{ width: "100%", height: "15rem" }}
                variant="top"
                src="https://i.postimg.cc/ZR6sg3VK/indica-vista-2008-2011.webp"
              />
            </div>
            <Card.Body>
              <Card.Title className="text-dark text-center fw-bolder fs-4">
                Tata Indica Vista
              </Card.Title>
              <Card.Text className="text-center">
                1200 Rs/ day <br />
                <hr />
                <div className="d-flex flex-row justify-content-evenly">
                  <div>
                    <p>seat (4+1)</p>
                    <p>TYPE: gg </p>
                  </div>
                  <div>
                    <p>TYPE: gg </p>
                    <p>TYPE: gg </p>
                  </div>
                </div>
              </Card.Text>
              <Button
                onClick={handleShow}
                style={{ marginLeft: "30%", width: "40%" }}
                className="btn-sm btn-dark "
              >
                RENT
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* model */}

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>ENTER YOUR DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-outline mb-3">
              <input
                type="text"
                name="uname"
                className="form-control  form-control-lg"
              />
              <label className="form-label text-dark">Your Name</label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
              />
              <label className="form-label text-dark">Your Email</label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="number"
                name="phn"
                className="form-control form-control-lg "
              />
              <label className="form-label text-dark">Your phone</label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark">SEND</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cars;
