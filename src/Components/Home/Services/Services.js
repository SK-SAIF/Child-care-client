import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
    const [serviceData,setServiceData]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getAllServices')
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])

    return (
        <section className="container mt-5 mb-5 text-center">
            <h1>OUR SERVICES</h1>
            <div className="row justify-content-md-center">
            {
                serviceData.map(service=><ServiceCard key={service._id} serviceInfo={service}></ServiceCard>)
            }
        </div>
        </section>
    );
};

export default Services;