import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';

const Orders = () => {
    const [orders,setOrders]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getAllOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    return (
        <div>
            {
                orders.map(order=><OrderCard order={order}></OrderCard>)
            }
        </div>
    );
};

export default Orders;