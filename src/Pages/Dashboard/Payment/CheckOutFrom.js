import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const CheckOutFrom = ({ appointment }) => {
    const [error, setError] = useState('')
    const { price, patientName, _id } = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')


    useEffect(() => {
        console.log('inside request')
        fetch('https://doctor-protal-server.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
            .catch(err => {
                console.log(err)
            })

    }, [price])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('')
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('Your payment processed successfully')
            console.log(paymentIntent)
            setProcessing(false);
            //save to database--------------
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://doctor-protal-server.onrender.com/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress /> : <button type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default CheckOutFrom;