import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, NavDropdown } from "react-bootstrap";


function Header() {
  const navigate = useNavigate();

  const isloggedinData = localStorage.getItem("isloggedin");
  console.log(isloggedinData);

  const adminLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <div>
      <Navbar expand="lg" id="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link to={"/"} style={{textDecoration:'none'}}>
              <Navbar.Brand
                className=" brand "
                style={{
                  fontWeight: "bolder",
                  marginRight: "10%",
                  marginTop: "-75px",
                }}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <img
                  style={{ height: "90px", width: "85px" }}
                  src="https://i.postimg.cc/nz23gyHV/vehicle-locksmith-illustration-bold-car-with-a-car-key-car-with-a-KJBEPG-removebg-preview.png"
                  alt=""
                />
                RENTACAR{" "}
              </Navbar.Brand>
            </Link>
            <Nav className="navbar-expand me-auto gap-3">
              <Link className="text-decoration-none" to={"/"}>
                <Nav.Item className="navlink fs-4 ms-5" >HOME</Nav.Item>
              </Link>
              {!isloggedinData ? (
                <Link className="text-decoration-none" to={"/cars"}>
                  <Nav.Item className="navlink fs-4 ms-4 ">CARS</Nav.Item>
                </Link>
              ) : (
                <Nav.Item className="navlink fs-4 ms-4"></Nav.Item>
              )}

              <Link className="text-decoration-none" to={"/blog"}>
                <Nav.Item className="navlink fs-4 ms-4 text-decoration-none ">
                  ABOUT
                </Nav.Item>
              </Link>

              {isloggedinData ? (
                <Link className="text-decoration-none" to={"/list"}>
                  <Nav.Item className="navlink fs-4 ms-4 ">RENTED</Nav.Item>
                </Link>
              ) : (
                <Nav.Item className="navlink fs-4 ms-4"></Nav.Item>
              )}

            
              {isloggedinData ? (
                
                <NavDropdown  className="dropdown text-white custom-dropdown ms-3"
              id="nav-dropdown-example"
              title="ADD"
              style={{color:'white'}}
              
            >
              <NavDropdown.Item href="/addnew">BUDGET CARS</NavDropdown.Item>
              <NavDropdown.Item href="/addluxury">
                LUXURY CARS
              </NavDropdown.Item>
              <NavDropdown.Item href="/addelectric">ELECTRIC CARS</NavDropdown.Item>
             
              
            </NavDropdown>
              ) : (
                <Nav.Item className="navlink fs-4 ms-4"></Nav.Item>
              )}
              {/* {isloggedinData ? (
                <Link className="text-decoration-none" to={"/cars"}>
                  <Nav.Item className="navlink fs-4 ms-4 ">CARS</Nav.Item>
                </Link>
              ) : (
                <Nav.Item className="navlink fs-4 ms-4"></Nav.Item>
              )} */}
            </Nav>
          </Navbar.Collapse>
          {/* <img style={{height:'90px', width:'100px'}} src="https://i.postimg.cc/TY3TS7Qz/Whats-App-Image-2023-11-13-at-8-28-38-PM-removebg-preview.png" alt="" /> */}

          <div>
            {!isloggedinData ? (
              <Link className="text-decoration-none" to={"/login"}>
                {" "}
                <Button className=" mt-2 fs-5 btn-sm mx-2 ">LOGIN</Button>
              </Link>
            ) : (
              <Button
                onClick={adminLogout}
                className=" mt-2 fs-5 btn-sm"
                variant="dark"
              >
                LOGOUT
              </Button>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;