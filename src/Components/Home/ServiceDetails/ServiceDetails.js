import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../Services/Services';


const ServiceDetails = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://warm-temple-20429.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data));

    }, []);




    return (
        <div>
            <h1 className="text-center">OUR SERVICES</h1>
            <div className="container d-flex flex-wrap">

                {
                    services.map((service) => (
                        <Services key={service._id} service={service}></Services>
                    ))
                }
            </div>
        </div>
    );
};

export default ServiceDetails;




