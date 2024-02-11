import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../Services/Allapi";



function Login() {

  const [logInputs, setLogInputs] = useState({
    email: "",
    psw: ""
  })

  const [emailValid, setEmailValid] = useState(true)
  const [pswValid, setPswValid] = useState(true)

  const navigate=useNavigate();

  const loginData = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    // console.log(name,value);
    if(name=='email'){
      if(value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        setEmailValid(true)
        setLogInputs({...logInputs, [name]:value})
      }
      else{
        setEmailValid(false)
      }
    }

    if(name=='psw'){
      if(value.match(/^[a-zA-Z0-9]+$/)){
        setPswValid(true)
        setLogInputs({...logInputs, [name]:value})
      }
      else{
        setPswValid(false)
      }
    }
    
  }


  console.log(logInputs);


 const handleLogin=async()=>{
  
  const {email,psw}=logInputs
   if(email==="" || psw===""){
    alert("All fields are required")
   }
   else{
    const result= await adminLogin(logInputs)
    console.log(result.data);
    if(result.status>=200 && result.status<=300){
      
      localStorage.setItem("isloggedin",result.data.email)
     
      alert("Login Successful")
      
      navigate('/')

    }
    else{
    
      alert(result.data);
    }
   }

  }
  

  return (
    
      <div className="main d-flex flex-row align-content-start justify-content-evenly">
        <div>
          <section className="section1"  data-aos="zoom-in"  data-aos-duration="1500">
            <h1
              className="lmshead mt-3"
              style={{
                lineHeight: "36px"
            
              }}
            >
              WELCOME
            </h1>
            <span style={{color:'black'}}>Rent your favourite cars here</span>
            <div className="input">
              <input
              onChange={(e) => { loginData(e) }}
                name="email"
                type="email"
                placeholder="Email address"
                className="p-3"
                style={{ borderRadius: "5px" }}
                
              />

              
            
              <input
              onChange={(e) => { loginData(e) }}
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

            <button  onClick={handleLogin}  className="mt-4 fw-bolder fs-5">
              LOGIN HERE
            </button>

               
          </section>
        </div>

        <div className="emptycolumn">
        
    <img style={{
        width:'750px', height:'500px', marginTop:'12%' 
    }} src="https://i.postimg.cc/vmFdV2gQ/xcar-1506922-960-720-1-jpg-pagespeed-ic-Q5-O7-YWn-SB.jpg" alt="" />

        </div>
      </div>
    
  );
}
``
export default Login;
