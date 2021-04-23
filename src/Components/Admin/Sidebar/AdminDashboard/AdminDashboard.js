import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminDashboardCard from './AdminDashboardCard';

const AdminDashboard = () => {
    const [orders,setOrders]=useState([]);

    useEffect(()=>{
        fetch('https://cryptic-wildwood-03747.herokuapp.com/getAllOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);
    return (
        <div>
            {
                orders.map(order=><AdminDashboardCard order={order}></AdminDashboardCard>)
            }
        </div>
    );
};

export default AdminDashboard;