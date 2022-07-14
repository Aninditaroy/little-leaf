import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1bgGBchpSOOo2r2l82aXOF13o0eTVYPwQhlWlNVA3mPdRPks5xJ9fAP2wS57YmmjFAthlLj0QFOgsju3T4b8Fj00S7MEJPw5');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/cart/${id}`;
    const { data: cart, isLoading } = useQuery(['cart', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))
    // console.log(appointment)

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='ml-20'>

            <div class="card  bg-base-100 max-w-md  shadow-xl my-12 ">
                <div class="card-body">
                    <p className="text-success font-bold">Hello ,{cart.name}</p>
                    <h2 class="card-title">Please Pay For {cart.price}</h2>
                    {/* <p>Your appointment <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                <p> pay for: ${appointment.price}</p> */}
                </div>
            </div>



            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm cart={cart} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;