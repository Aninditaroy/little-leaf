
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const CheckoutForm = ({ cart, setCartProducts, cartProducts, total, address, city, country, zipcode, orderNotes, orderTime, orderDate }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transectionId, setTransectionId] = useState('')
    const [clientSecret, setClientSecret] = useState(true);
    const [user] = useAuthState(auth);




    const { _id, price, name } = cart;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://rocky-anchorage-54101.herokuapp.com/create-payment-intent", {
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
            // setCartProducts([])
            setCardError('')
            setTransectionId(paymentIntent.id)
            console.log('total from else check', total)
            setCardSuccess('Congrats! Your payment is completed.')
            // setCartProducts('')


            // store payment on db
            const orders = {
                order: _id,
                total: total,
                userName: user?.displayName,
                userEmail: user?.email,
                transectionId: paymentIntent.id,
                address: address,
                city: city,
                country: country,
                zipcode: zipcode,
                orderNotes: orderNotes,
                orderTime: orderTime,
                orderDate: orderDate

            }
            // update backend after payment successfull
            const url = `https://rocky-anchorage-54101.herokuapp.com/orders`
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    //authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(orders),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                })





            const url1 = `https://rocky-anchorage-54101.herokuapp.com/carts`
            fetch(url1, {
                method: 'delete',
                headers: {
                    "content-type": "application/json",

                },
                // body: JSON.stringify(orders),
            })
                .then(res => res.json())
                .then(data => {
                    // setProcessing(false)
                    console.log(data)
                })


            // const clearCart = () => {
            //     const url1 = `https://rocky-anchorage-54101.herokuapp.com/carts`
            //     fetch(url1, {
            //         method: 'delete',
            //         headers: {
            //             "content-type": "application/json",

            //         },
            //         // body: JSON.stringify(orders),
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             // setProcessing(false)
            //             console.log(data)
            //         })
            // }


            cartProducts.map(cartProduct => {
                const cartProductTest = {
                    description: cartProduct.description,
                    img: cartProduct.img,
                    name: cartProduct.name,
                    price: cartProduct.price,
                    quantity: cartProduct.quantity,
                    transectionId: paymentIntent.id

                }
                // console.log(cartProduct)
                const url = 'https://rocky-anchorage-54101.herokuapp.com/orderItem'
                fetch(url, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        //authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(cartProductTest),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })

            // patch instock in products

            cartProducts.map(cartProduct => {
                let prevQty = cartProduct?.quantity;
                let newInStock = cartProduct?.inStock - prevQty;
                const stock = {
                    inStock: newInStock
                }
                console.log('new stock from checkout', newInStock)
                const url = `https://rocky-anchorage-54101.herokuapp.com/products/${cartProduct?.cartId}`
                fetch(url, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        //authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(stock),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })


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
                <button className='btn bg-[#368246] text-white btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || cardSuccess}>
                    Pay
                </button>

            </form>
            {
                cardError && <p className='font-bold text-red-700'>{cardError}</p>
            }
            {
                cardSuccess && <div className='font-bold text-[#368246]'>
                    <p>{cardSuccess}</p>
                    <p>Your Transaction id <span className="text-orange-500 font-bold">{transectionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;