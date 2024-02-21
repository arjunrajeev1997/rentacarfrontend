import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container-fluid w-300 '>
      <div className=' justify-content-evenly text-white' >
        <div className='d-flex justify-content-center' style={{marginTop:"0px"}}> <img
                  style={{ height: "65px", width: "60px" }}
                  src="https://i.postimg.cc/nz23gyHV/vehicle-locksmith-illustration-bold-car-with-a-car-key-car-with-a-KJBEPG-removebg-preview.png"
                  alt=""
                /><h3>RENTACAR</h3></div>
        <div  className='d-flex justify-content-center' style={{marginTop:"7px" }}>
          <p>Copyright & copy: 2024 RENTACAR</p>
        </div>
        <div className='d-flex justify-content-center gap-3' style={{marginTop:"9px" }}>
        <i style={{height:'50px'}} className="fa-brands fa-instagram fa-2x gap-2" href="https://www.instagram.com/?hl=en"></i>
        <i style={{height:'50px'}} className="fa-brands fa-facebook fa-2x gap-2"></i>
        <i style={{height:'50px'}} className="fa-brands fa-twitter fa-2x"></i>
        </div>
      </div>
      {/* <div className='footer-content d-flex justify-content-between px-2'> */}
        {/* <div style={{width:'400px', marginTop:'30px'}} className='title w-25'> */}
        {/* <h3 className='d-flex text-white'> */}
       {/* RENTACAR</h3> */}
        {/* <span className='text-white'>Designed and built with all the love in the world by Bootstrap team with the help of our contributors.</span> <br/> */}
       
        {/* </div> */}
      {/* <div className="links d-flex flex-column ">
        <h5>Links</h5>
        <Link to={'/'} style={{color:'white'}} className='text-decoration-none' >HOME</Link>
        <Link to={'/cars'} style={{color:'white'}} className='text-decoration-none' >CARS</Link>
        <Link to={'/blog'} style={{color:'white'}} className='text-decoration-none' >BLOG</Link>

      </div> */}
      {/* <div className="guides d-flex flex-column"> */}
      {/* <h5>Guides</h5>
        <a style={{color:'white'}} className='text-decoration-none' href="">React</a>
        <a style={{color:'white'}} className='text-decoration-none' href="">React Bootstrap</a>
        <a style={{color:'white'}} className='text-decoration-none' href="">React Routing</a> */}
      {/* </div> */}
      {/* <div className="contact">
        <h5>Contact Us</h5>
        <div className="d-flex"> */}
          {/* <input placeholder="Enter your mail" type="text" className='form-control' /> */}
          {/* <button className='btni ms-2'><i className="fa-solid fa-arrow-right"></i></button>
        </div> */}
       {/* <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between gap-3">
       <i style={{height:'50px'}} className="fa-solid fa-envelope fa-2x"></i>
      //  <i style={{height:'50px'}} className="fa-brands fa-twitter fa-2x"></i> */}
       {/* <i style={{height:'50px'}} className="fa-brands fa-github fa-2x"></i> */}
       {/* <i style={{height:'50px'}} className="fa-brands fa-facebook fa-2x"></i> */}
       {/* <i style={{height:'50px'}} className="fa-brands fa-instagram fa-2x"></i> */}
       {/* <i style={{height:'50px'}} className="fa-brands fa-linkedin fa-2x"></i> */}
        
        
      {/* </div>  */}
        
      {/* </div> */}
      {/* </div> */}
      {/* // <p className='text-center  text-white'>Copyright & copy: 2024 RENTACAR</p> */}
    </div>
  )
}

export default Footer