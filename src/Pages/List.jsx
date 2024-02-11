import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import './List.css'
import Header from '../Components/Header'
import { getEnquiries } from '../Services/Allapi'


function List() {

    const [enquiries, setEnquiries] = useState({})

    const getEnquiryData = async () => {
        const { data } = await getEnquiries()
        console.log(data);
        setEnquiries(data)
    }

    console.log(enquiries);

    useEffect(() => {
        getEnquiryData()
    }, [])

    return (

        <div className='first' style={{ padding: '1rem 0' }}>
         
            <Header></Header>
        
            <div className='view_detail'>
            <h1 className=' text-center text-white fw-bolder mt-5'>ENQUIRED LIST</h1>
            <div className='view_table mt-5'>
                {enquiries.length > 0 ? (
                    <Table striped bordered responsive hover variant="dark" className=''>

                        <thead >
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>CONTACT NO</th>
                                <th>NO OD DAYS</th>
                            </tr>
                        </thead>
                        <tbody>

                            {enquiries.map((i, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.uname}</td>
                                    <td>{i.email}</td>
                                    <td>{i.phn}</td>
                                    <td>{i.days}</td>

                                </tr>
                            )}




                        </tbody>


                    </Table>
                ) : <h1>NO DATA FOUND</h1>
                }

</div>

            </div>
        </div>
    )
}

export default List