import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";



function Login() {
  

  return (
    
      <div className="main d-flex flex-row align-content-start justify-content-evenly">
        <div>
          <section className="section1">
            <h1
              className="lmshead mt-3"
              style={{
                fontFamily: "Inter",
                lineHeight: "36px"
            
              }}
            >
              WELCOME
            </h1>
            <span style={{color:'black'}}>Rent your favourite cars here</span>
            <div className="input">
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="p-3"
                style={{ borderRadius: "5px" }}
                
              />
            

              <input
                name="psw"
                type="password"
                placeholder="Password"
                className="p-3"
                style={{ borderRadius: "5px" }}
                
              />
              
            </div>

            <span className="forgot mt-2" style={{ color: "black" }}>
              Dont have an account? <a href="./signup" style={{ color: "black" }}>Create account</a>
            </span>
<Link to='/home' style={{textDecoration:'none'}}>
            <button   className="mt-4 fw-bolder fs-5">
              LOGIN HERE
            </button>

            </Link>        
          </section>
        </div>

        <div className="emptycolumn">
        
    <img style={{
        width:'700px', height:'400px', marginTop:'19%' 
    }} src="https://i.postimg.cc/vmFdV2gQ/xcar-1506922-960-720-1-jpg-pagespeed-ic-Q5-O7-YWn-SB.jpg" alt="" />

        </div>
      </div>
    
  );
}
``
export default Login;
