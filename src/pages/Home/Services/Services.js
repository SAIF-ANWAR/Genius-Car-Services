import React, { useEffect, useState } from 'react';
import SingleService from '../SIngle-service/SingleService';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='container  mt-5'>
            <h1 className='services-title mb-5 text-primary'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;