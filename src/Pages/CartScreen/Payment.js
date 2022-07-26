import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Loading from './../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from './../../Hooks/useCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const stripePromise = loadStripe('pk_test_51L1bgGBchpSOOo2r2l82aXOF13o0eTVYPwQhlWlNVA3mPdRPks5xJ9fAP2wS57YmmjFAthlLj0QFOgsju3T4b8Fj00S7MEJPw5');

const Payment = () => {
    let subtotal = 0;
    let vat = 0;
    let total = 0;
    let shipping = 8;
    const [cartProducts, setCartProducts] = useCart();
    const [cartOrders, setCartOrders] = useState([]);
    const [user, loading] = useAuthState(auth)
    const { id } = useParams()
    const url = `http://localhost:5000/cart/${id}`;
    const { data: cart, isLoading } = useQuery(['cart', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))

    // post all orders

    // const orderurl = `http://localhost:5000/orders`;
    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders`)
    //         .then(res => res.json())
    //         .then(data => setCartProducts(data))
    // }, [cartProducts])

    // console.log(appointment)

    if (isLoading || loading) {
        return <Loading></Loading>
    }
    cartProducts?.forEach(product => {
        subtotal += product.price * parseInt(product.quantity);
        vat = subtotal * (0.075);
        total = subtotal + vat + shipping;
    })

    return (
        <div className='ml-20'>

            <div class="card  bg-base-100 max-w-md  shadow-xl my-12 ">
                <div class="card-body">
                    <p className="text-success font-bold">Hello ,{user.displayName}</p>
                    <h2>Please Pay $<span class="text-2xl font-bold">
                        {total}</span></h2>
                    <p className="text-success font-bold">Your ordered list:</p>
                    {
                        cartProducts.map(product =>
                            <p>{product.quantity} X {product.name}</p>
                        )
                    }
                </div>
            </div>

            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm cart={cart} setCartProducts={setCartProducts} cartProducts={cartProducts}
                            total={total} />
                    </Elements>
                </div>
            </div>
        </div >
    );
};

export default Payment;