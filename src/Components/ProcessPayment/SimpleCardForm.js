import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <br />
            {
                paymentError && <p className="text-danger">{paymentError}</p>
            }
            {
                paymentSuccess && <p className="text-success">Your payment is successful</p>
            }
        </div>
    );
};

export default SimpleCardForm;