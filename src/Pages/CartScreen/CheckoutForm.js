
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transectionId, setTransectionId] = useState('')
    const [clientSecret, setClientSecret] = useState(true);

    const { _id, price, name } = cart;
    useEffect(() => {
        console.log('ewew');
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
            });
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        // if (error) {
        //     console.log('[error]', error);

        // } else {
        //     console.log('[PaymentMethod]', paymentMethod);
        // }
        setCardError(error?.message || '')
        setCardSuccess('')
        setProcessing(true)

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        // email: patient
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransectionId(paymentIntent.id)
            console.log(paymentIntent)
            setCardSuccess('Congrats! Your payment is completed.')


            //store payment on db
            // const payment = {
            //     appointment: _id,
            //     transectionId: paymentIntent.id
            // }
            // //update backend after payment successfull
            // const url = `https://gentle-anchorage-06325.herokuapp.com/booking/${_id}`
            // fetch(url, {
            //     method: "PATCH",
            //     headers: {
            //         "content-type": "application/json",
            //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
            //     },
            //     body: JSON.stringify(payment),
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         setProcessing(false)
            //         console.log(data)
            //     })
        }
    };

    return (
        <>
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
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || cardSuccess}>
                    Pay
                </button>

            </form>
            {
                cardError && <p className='font-bold text-red-700'>{cardError}</p>
            }
            {
                cardSuccess && <div className='font-bold text-green-700'>
                    <p>{cardSuccess}</p>
                    <p>Your Transaction id <span className="text-orange-500 font-bold">{transectionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;