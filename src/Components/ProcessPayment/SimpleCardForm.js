import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../App';

const SimpleCardForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
            setPaymentSuccess(paymentMethod?.id);
            handlePayment();
            setPaymentError(null);
        }
    };

    const handlePayment = () => {
        const paymentInfo = { email: loggedInUser.email, id: paymentSuccess };
        fetch("https://infinite-garden-56670.herokuapp.com/addPayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentInfo),
        });
    }

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