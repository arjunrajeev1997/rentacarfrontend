import React, { useState } from 'react'
import { Col, Container, Row, Toast } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import './addnew.css'
import Header from '../Components/Header';
import { addwork } from '../Services/Allapi';




function Addnew() {
 
    //state to works
    const [workInput, setworkInput] = useState({
        brand: "",
        price: "",
        rate: "",
        facility: "",
        seat: "",
        image: ""
       

    })
    // finvtion to get inputs
    const workData = (e) => {
        const { name, value } = e.target
        setworkInput({ ...workInput, [name]: value })
    }

    console.log(workInput);




    const handleData = async (e) => {
        //to prevent auto refresh
        e.preventDefault();
        const { brand, price, rate, facility, seat, image} = workInput;
        if (
            brand == "" ||
            price == "" ||
            rate == "" ||
          facility == "" ||
            seat == "" ||
            image == ""
            
        ) {
            alert("please add complete details");
        }else{
            const result= await addwork(workInput)

        alert("added successfully")
       
        
        } 
    };


    return (
        
        <div className='main' style={{height:'69rem'}}>
      <section className="addworks">
        <div className=" d-flex align-items-center h-100">
          <div className="container"  style={{ padding: '1rem 0' }}>
            <Header></Header>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card mt-4" style={{ borderRadius: '15px', height: '50rem' }}>
                  <div className="card-body p-4">
                    <h1 className=" text-center text-white mb-5">ADD NEW WORKS</h1>

                    <form>

                      <div className="form-outline mb-3">
                        <input id="desn" onChange={(e) => workData(e)} type="text" name='brand' className="form-control  form-control-lg" />
                        <label className="form-label text-white" >Add brand name</label>
                      </div>
                     


                      <div className="form-outline mb-3">
                        <input id="wnames" onChange={(e) => workData(e)} type="number" name='price' className="form-control form-control-lg" />
                        <label className="form-label text-white" >Add price</label>
                      </div>

                      

                      <div className="form-outline mb-3">
                        <input id="locations" onChange={(e) => workData(e)} type="text" name='rate' className="form-control form-control-lg " />
                        <label className="form-label text-white" >Add rating</label>
                      </div>
                     
                      <div className="form-outline mb-3">
                        <input id="inputPassword55" onChange={(e) => workData(e)} name='facility' type="text" className="form-control form-control-lg " />
                        <label className="form-label text-white" >Extra facilities</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input  id="inputPassword58" onChange={(e) => workData(e)} name='seat' type="text" className="form-control form-control-lg " />
                        <label className="form-label text-white" >seats</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input id="inputPassword51" onChange={(e) => workData(e)} name='image' type="text" className="form-control form-control-lg " />
                        <label className="form-label text-white" >image</label>
                      </div>

                     


                      <div className="d-flex justify-content-center">
                        <button 
                          className="btn btn-lg btn-light text-white" onClick={handleData}>ADD CAR</button>
                      </div>

    
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Addnew