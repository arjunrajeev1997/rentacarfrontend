import React from 'react'
import './Blog.css';
import { Col, Row } from 'react-bootstrap';
import Header from '../Components/Header';



function Blog() {
    return (
        <div className='main bg-black' style={{ padding: '1rem 0' }}>
            <Header></Header>
            
            <Row>
                <Col className='md-6 lg-6' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"  >
                    <img src="https://i.postimg.cc/RhxqZq1C/190325-rental-cars-cs-229p.webp" alt="" style={{ marginLeft:'30px', marginTop:'100px'}} />
                </Col>
                <Col className='md-5 lg-5 '>
                    <div className='mt-5' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" >
                        <h3 className='fw-bolder' style={{ fontSize: '45px', color: 'black' }}>WHO WE ARE</h3>
                        <div>
                        <h6 className='text-black'>JUNE 2023</h6>
                        </div>
                        <p className='pe-3 mt-5' style={{color:'black',lineHeight:'35px', fontSize:'18px'}}> 
                        At Rent-A-Car, our mission is to provide convenient, reliable, and affordable car rental services to our customers. We strive to make the rental process as seamless as possible, ensuring a stress-free experience from booking to drop-off.
                        </p>
                        <p className='pe-3 mt-1' style={{color:'black',lineHeight:'35px', fontSize:'18px'}}> 
                        Our extensive fleet of vehicles includes a wide range of options to suit every need and budget. From compact cars for city exploration to spacious SUVs for family road trips, we have the perfect vehicle for every occasion. All our vehicles are well-maintained, thoroughly inspected, and equipped with modern amenities to ensure your comfort and safety on the road. </p>


                        <p className='pe-3 mt-1' style={{color:'black',lineHeight:'35px', fontSize:'18px'}}> 
                        Customer satisfaction is our top priority at Rent-A-Car. Our dedicated team is committed to providing exceptional service and personalized assistance to meet your unique requirements. Whether you have questions about our rental policies, need assistance with your reservation, or require roadside support during your trip, our friendly staff is here to help you every step of the way.   </p>                     

                    </div>
                </Col >


                
            </Row>




            <Row>
            <Col className='md-5 lg-5 '>
                    <div className=' mt-5' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" >
                        <h1 className='fw-bolder ps-3' style={{ fontSize: '45px', color: 'black' }}>WHAT CLIENTS SAYS ABOUT US</h1>
                        <div>
                        {/* <h6 className='text-secondary ps-3'>MARCH 2023</h6> */}
                        </div>
                        <p className='ps-3 mt-5' style={{color:'black',lineHeight:'35px', fontSize:'18px',fontStyle:'italic'}}> 
                        "As a frequent traveler, I rely on Rent-A-Car for all my rental needs. Their easy booking process, competitive rates, and reliable vehicles make them my go-to choice every time. Whether I'm traveling for business or leisure, I know I can count on Rent-A-Car for a hassle-free experience. Highly recommended!"                        </p>
                        
                        <p style={{marginLeft:'20px'}}>-JOHN DAVID</p>
                        
                        <p className='ps-3 mt-3' style={{color:'black',lineHeight:'35px', fontSize:'18px',fontStyle:'italic'}}> 
                        "Rent-A-Car exceeded my expectations during our recent family vacation. We needed a spacious SUV to accommodate our family of five, and Rent-A-Car had the perfect vehicle for us. The booking process was quick and straightforward, and the staff was friendly and helpful. The SUV was clean, comfortable, and equipped with all the features we needed for a smooth and enjoyable trip. Thank you, Rent-A-Car, for helping us create lasting memories!"                         </p>

                        <p style={{marginLeft:'20px'}}>-MAX MILLER</p>
                        

                    </div>
                </Col >
                <Col className='md-6 lg-6' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" >
                    <img src="https://thumbs.dreamstime.com/b/portrait-happy-customer-buying-new-car-salon-portrait-happy-customer-buying-new-car-104919884.jpg" alt="" style={{ marginRight:'30px', marginTop:'60px'}} />
                </Col>
                


                
            </Row>
            
        </div>
    )
}

export default Blog