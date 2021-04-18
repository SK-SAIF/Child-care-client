import React, { useEffect, useState } from 'react';
import AdminServiceCard from '../../AdminServiceCard/AdminServiceCard';


const ManageService = () => {
    const [allServiceData,setAllServiceData]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getAllServices')
        .then(res=>res.json())
        .then(data=>setAllServiceData(data))
    },[])
    return (
        <div className="row">
            {
                allServiceData.map(serviceInfo=><AdminServiceCard serviceInfo={serviceInfo}></AdminServiceCard>)
            }
            
        </div>
    );
};

export default ManageService;