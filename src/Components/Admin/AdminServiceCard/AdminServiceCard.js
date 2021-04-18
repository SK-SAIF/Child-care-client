import React from 'react';

const AdminServiceCard = ({serviceInfo}) => {
    console.log(serviceInfo);
    return (
        <div>
            <img src={serviceInfo.image} alt=""/>
           <h2>{serviceInfo.name}</h2>
           <p>{serviceInfo.description}</p>
           <h5>{serviceInfo.price}</h5>
        </div>
    );
};

export default AdminServiceCard;