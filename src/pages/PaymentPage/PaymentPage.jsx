import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import PaymentForm from '../PaymentForm/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51LY447HWg33SQmOYkw5NDamYDIC6nmq6E8TuAzs8BFgElOjFEhM8GjZxjoIguoAhF07s5XgS346RXTd4Fx4xz9rX00cYDOothX")

function PaymentPage() {
  return (
    <div>
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    </div>
  )
}

export default PaymentPage;
