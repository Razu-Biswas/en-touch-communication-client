import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ServiceContext } from '../../Context/ServiceContext';
import PaymentCard from '../../Payment/PaymentCard';




const stripePromise = loadStripe(
    'pk_test_51Ie30zFJFDWBe99pzwyUjngPdy4SIAFLDhii3sQ8gai4K8KahSSwANOGHG9bUW79EKlkpBEiQ7kf0LYnKzhlUfCS00hb8qaYJB'
);

const Checkout = () => {

    const { user } = useContext(ServiceContext);
    const { id } = useParams();
    console.log(id);
    const [service, setService] = useState({});
    const { name, price, url } = service;
    const [payment, setPayment] = useState(false)

    const { email } = user;
    useEffect(() => {
        fetch(`https://warm-temple-20429.herokuapp.com/checkout/${id}`)
            .then((response) => response.json())
            .then((data) => setService(data[0]));
    }, [id]);

    const history = useHistory();

    const checkoutBtn = () => {
        const orderInfo = {
            serviceName: name,
            price: price,
            email: email,
            quantity: 1,
            imgUrl: url,
            date: new Date(),
            status: 'pending'
        };
        console.log(user);
        console.log(orderInfo);
        // console.log(orderInfo);
        axios.post('https://warm-temple-20429.herokuapp.com/saveorder', orderInfo).then((res) => {
            // console.log(res);
            toast.success('Payment Successfully');
            history.push("/")
            console.log('call');
        });
    };




    return (
        <div className="container">
            <h1>Let's Checkout</h1>
            <div className="row">
                <div className="col-md-8">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Description</th>
                                <th>Package</th>
                                <th>Price</th>
                                <th>Confirm Checkout</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{service.name}</td>
                                <td>1</td>
                                <td>{service.price}</td>
                                <td><button className="btn-success btn" onClick={() => setPayment(!payment)}>Confirm & Payment</button></td>
                            </tr>
                        </tbody>
                    </Table>


                    {
                        payment && <Elements stripe={stripePromise}><PaymentCard checkoutBtn={checkoutBtn}></PaymentCard> </Elements>
                    }


                </div>

                <div className="col-md-4">
                    <img style={{ width: '200px' }} src={service.image} alt="" />
                    <h5>{service.name}</h5>
                    <h6>description: {service.description}</h6>
                    <h5>Price: ${service.price}</h5>
                    <h3> Confirm your Order.</h3>
                </div>
            </div>
        </div>

    );
};

export default Checkout;