import React from 'react';
import { ListGroup } from 'react-bootstrap';

const AdminDashboardCard = ({ order }) => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>Order ID: {order._id}</ListGroup.Item>
                <ListGroup.Item>{order.name} <br/>{order.email} <br/>{order.service} <br/>{order.price}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default AdminDashboardCard;