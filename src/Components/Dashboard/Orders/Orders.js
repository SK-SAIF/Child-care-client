import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import OrderCard from '../OrderCard/OrderCard';

const Orders = () => {
    const [orders,setOrders]=useState([]);
    const [user, setUser]=useContext(UserContext);

    useEffect(()=>{
        fetch('https://cryptic-wildwood-03747.herokuapp.com/getSpecificOrders?email='+user.email)
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