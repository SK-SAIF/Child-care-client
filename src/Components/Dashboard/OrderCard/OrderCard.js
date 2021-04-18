import React from 'react';

const OrderCard = ({order}) => {
    return (
        <div>
            <ul>
                <li>{order.service}</li>
                <p>{order.price}</p>
            </ul>
        </div>
    );
};

export default OrderCard;