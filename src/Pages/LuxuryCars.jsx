import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./luxurycars.css";
import Modal from "react-bootstrap/Modal";
import Header from "../Components/Header";
import { addEnquiries, getAllLuxuryCars } from "../Services/Allapi";
import { useNavigate } from "react-router-dom";


function LuxuryCars() {

  const navigate=useNavigate()
  const [inputs, setInputs] = useState({
      uname: "",
      email: "",
      phn: "",
      days:""
  })

  const getInputs = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
}
console.log(inputs);


  const [display, setDisplay] = useState({})
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const getLuxuryCars = async () => {
    const { data } = await getAllLuxuryCars()
      console.log(data);
      setDisplay(data)
  }
  
  console.log(display);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const result=await addEnquiries(inputs)
    console.log(result);
    alert("Data successfully sent,we will contact you shortly")
    navigate('/luxurycars')
    handleClose();
}



  useEffect(() => {
    getLuxuryCars();
}, [])

  return (
    <div className="display " style={{ padding: "1rem 0" }}>
         <Header></Header>
      <Row>


        {
          display.length>0 && display.map((i) => (
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
                src={i.image}
              />
            </div>
            <Card.Body>
              <Card.Title className="text-dark text-center fw-bolder fs-4">
                {i.brand}
              </Card.Title>
              <Card.Text className="text-center fw-bolder">
                {i.price} Rs/ day <br />
                <hr />
                <div className="d-flex flex-row justify-content-evenly">
                  <div>
                    <p>seat {i.seat}</p>
                    <p>{i.facility}</p>
                  </div>
                  <div>
                    <p>RATE: {i.rate} </p>
                    <img style={{height:'50px', width:'120px',marginTop:'-10px'}} src="https://i.postimg.cc/wTYnPFWR/360-F-274864312-u-Nlm9y-Cpd-Viw-Kz-Hk-Cp0s-OBrm-JFN0p-KAa-removebg-preview-1.png" alt="" />
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

          ))
        }
        
       
      </Row>

      {/* model */}

      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ENTER YOUR DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-outline mb-3">
              <input
              onChange={(e) => getInputs(e)}
                type="text"
                name="uname"
                className="form-control  form-control-lg"
              />
              <label className="form-label text-dark">Your Name</label>
            </div>

            <div className="form-outline mb-3">
              <input
              onChange={(e) => getInputs(e)}
                type="email"
                name="email"
                className="form-control form-control-lg"
              />
              <label className="form-label text-dark">Your Email</label>
            </div>

            <div className="form-outline mb-3">
              <input
              onChange={(e) => getInputs(e)}
                type="number"
                name="phn"
                className="form-control form-control-lg "
              />
              <label className="form-label text-dark">Your phone</label>
            </div>
            <div className="form-outline mb-3">
              <input
              onChange={(e) => getInputs(e)}
                type="text"
                name="days"
                className="form-control form-control-lg "
              />
              <label className="form-label text-dark">Number of days</label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} style={{width:'100%', marginRight:'10%'}} variant="dark">SEND</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LuxuryCars;