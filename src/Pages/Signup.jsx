import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { Adminregister } from "../Services/Allapi";


function Signup() {

  const [inputs, setInputs] = useState({
    uname: "",
    email: "",
    phone:"",
    psw: "",
    cpsw: "",
  })


  const [unameValid, setUnameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [pswValid, setPswValid] = useState(true)

  const navigate=useNavigate()


  const signupData = (e) => {
    const { name, value } = e.target
    // console.log(name, value);

    if (name == 'uname') {
      if (value.match(/^[a-zA-Z]+$/)) {
        setUnameValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setUnameValid(false)
      }
    }


    if(name=='phone'){
      if(value.match(/^[0-9]+$/)){
        setInputs({...inputs,[name]:value})
      }
    }

    //email
    if (name == 'email') {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmailValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setEmailValid(false)
      }
    }

    //psw

    if (name === 'psw') {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setPswValid(true)
        setInputs({ ...inputs, [name]: value })

      }
      else {
        setPswValid(false)
      }
    }

    
    //psw

    if (name === 'cpsw') {
     setInputs({...inputs, [name]:value})
      
    }

  }
  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uname, email,phone, psw, cpsw } = inputs
    if(uname==""){
      alert("Username required ")
    }

    else if(email==""){
      alert("Email required ")
    }
    else if(phone==""){
      alert("Phone required ")
    }
    else if(psw==""){
      alert("Password  required ")
    }

    else if(cpsw==""){
      alert("Confirm password  required ")
    }
    else{
      if(psw==cpsw){
        const result = await Adminregister(inputs)
// console.log(result);
        alert("registered successfully")
        // console.log(result);
        navigate('/login')
      }
      else{
        alert("Password and confirm password must be same")
      }
    }
    

    
  }


  return (
    <div className="main d-flex flex-row align-content-start justify-content-evenly">
      <div>
        <section className="section1" data-aos="zoom-in"  data-aos-duration="1500" >
          <h1
            className="signuphead"
            style={{
              
              lineHeight: "30px"
            }}
          >
            CREATE YOUR ACCOUNT
          </h1>
          <span style={{ color: "black" }}>Rent your favourite cars here</span>
          <div className="input">
            <input
            onChange={(e) => signupData(e)}
              name="uname"
              type="text"
              placeholder="User Name"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
            onChange={(e) => signupData(e)}
              name="email"
              type="email"
              placeholder="Email address"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
            onChange={(e) => signupData(e)}
              name="phone"
              type="number"
              placeholder="Mobile Number"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
            onChange={(e) => signupData(e)}
              name="psw"
              type="password"
              placeholder="Password"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />

            <input
            onChange={(e) => signupData(e)}
              name="cpsw"
              type="password"
              placeholder="Confirm Password"
              className="p-2"
              style={{ borderRadius: "5px" }}
            />
          </div>

          
            <button className="mt-3 fw-bolder fs-5" onClick={handleSubmit}>CREATE ACCOUNT</button>
          
          <span className="already" style={{ color: "black" }}>
            Already have an account?{" "}
            <a href="./login" style={{ color: "black" }}>
              Login here
            </a>
          </span>
        </section>
      </div>

      <div className="emptycolumn">
        <img
          style={{
            width: "650px",
            height: "500px",
            marginTop: "17%",
          }}
          src="https://i.postimg.cc/V6WZ5DMH/pexels-jagmeet-singh-1134857.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Signup;
