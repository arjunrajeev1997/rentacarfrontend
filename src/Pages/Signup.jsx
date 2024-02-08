import React from "react";
import { Col, Row } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="main d-flex flex-row align-content-start justify-content-evenly">
      <div>
        <section className="section1">
          <h1
            className="signuphead"
            style={{
              fontFamily: "Inter",
              lineHeight: "30px",
            }}
          >
            CREATE YOUR ACCOUNT
          </h1>
          <span style={{ color: "black" }}>Rent your favourite cars here</span>
          <div className="input">
            <input
              name="uname"
              type="text"
              placeholder="User Name"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
              name="phone"
              type="number"
              placeholder="Mobile Number"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
              name="psw"
              type="password"
              placeholder="Password"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
              name="cpsw"
              type="password"
              placeholder="Confirm Password"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />
          </div>

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <button className="mt-3 fw-bolder fs-5">CREATE ACCOUNT</button>
          </Link>
          <span className="already" style={{ color: "black" }}>
            Already have an account?{" "}
            <a href="./" style={{ color: "black" }}>
              Login here
            </a>
          </span>
        </section>
      </div>

      <div className="emptycolumn">
        <img
          style={{
            width: "600px",
            height: "400px",
            marginTop: "25%",
          }}
          src="https://i.postimg.cc/V6WZ5DMH/pexels-jagmeet-singh-1134857.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Signup;
