import React, { useState } from 'react'
import './Home.css'
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';



function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div   >
      

      <section className='start' style={{ padding: '1rem 0' }} >
      <Header></Header>
      
        <div className='d-flex align-items-center justify-content-start' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className='fw-bolder ms-5 mt-5 ' style={{ fontSize: '100px', color: 'white' }}>CARS WE DRIVE <br />SAY ABOUT US</h1>

        </div>
        <p style={{ color: 'white' }} className='ms-5 mb-2 fs-4' data-aos="fade-up"
          data-aos-duration="2000">-Enjoy your trips with our wheels </p>
    
      </section>

      <section className='about'>
      <Row className='p-5'>
        <Col className='md-4 lg-4 '>
          <Link className='text-decoration-none' to={'/luxurycars'}>
          <Card data-aos="zoom-in" data-aos-duration="1000" className='' style={{ width: '23.1rem', height:'30rem',boxShadow:'10px' }}>
            <Card.Img className='cardimg' variant="top" style={{width:'23rem',height:'18rem'}} src="https://i.postimg.cc/RZWySkRP/qnpasplo-updated-2023-rollsroyce-phantom-series-ii-unveiled-with-new-features-and-connected-tech-625.webp" />
            <Card.Body>
              
              <Card.Title className='text-dark fw-bolder fs-4'>LUXURY CARS</Card.Title>
              
              <Card.Text>
                We have highend luxury cars with best fetaures and amineties.
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>



        <Col className='md-4 lg-4' style={{paddingTop:'70px'}}>
        <Link className='text-decoration-none' to={'/electriccars'}>
          <Card data-aos="zoom-in" data-aos-duration="1500" className='' style={{ width: '23.1rem', height:'30rem' }}>
            <Card.Img className='cardimg'  variant="top" style={{width:'23rem',height:'18rem'}} src="https://i.postimg.cc/9F7yc19d/profile1705575369.avif" />
            <Card.Body>
           
              <Card.Title className='text-dark fw-bolder fs-4'>ELECTRIC CARS</Card.Title>
             
              <Card.Text>
              We have ecofriendly electric cars with great mileage and features.
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>



        <Col className='md-4 lg-4' style={{paddingTop:'140px'}}>
          <Link className='text-decoration-none' to={'/cars'}>
          <Card data-aos="zoom-in" data-aos-duration="2000" className='crd' style={{ width: '24rem', height:'29rem' }}>
            <Card.Img className='cardimg' variant="top" style={{width:'24rem',height:'16rem'}} src="https://static.toiimg.com/thumb/imgsize-23456,msid-89824717,width-600,resizemode-4/89824717.jpg" />
            <Card.Body>
           
              <Card.Title className='text-dark fw-bolder fs-4'>BUDGET CARS</Card.Title>
             
              <Card.Text className='text-black'>
              We have budget friendly cars with great mileage.
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>
      </Row>
      </section>
      <Footer></Footer>

    </div>
  )
}

export default Home