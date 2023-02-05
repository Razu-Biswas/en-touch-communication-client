import React from 'react';

import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Services.css'
import { Link } from 'react-router-dom';



const Services = ({service}) => {
    return (
        <div className=" row  p-1 my-2 mx-5 " >
            
            <Card className="card-r" style={{ width: '15rem' }}   >
            <Card.Img variant="top"  style={{ height: 'auto', width: '180px', display: 'block', margin: 'auto',}} src={service.image} className="mt-4 rounded" />
            <Card.Body >
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <h5 className='pl-2'> $ {service.price}<Link to={`/checkout/${service._id}`}><Button variant="danger">Purchase Now</Button></Link></h5>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Services;


