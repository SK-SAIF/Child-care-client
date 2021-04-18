import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51IeHf0D6p6yLpX660TVddwJabyWGDswnAMjRJBzSWq0LH9Afz8CFsb0KM03iLOJBY1pVHExM7rBvnCaYp1lmckSM00IZUt9Oyj');

const PaymentCard = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
    );
};

export default PaymentCard;