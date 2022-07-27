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
    // let address = '';
    const [cartProducts, setCartProducts] = useCart();
    const [cartOrders, setCartOrders] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [orderNotes, setOrderNotes] = useState('');
    console.log(address)
    const [user, loading] = useAuthState(auth)
    const { id } = useParams()
    const orderDate = new Date().toLocaleDateString("en-US");
    const orderTime = new Date().toLocaleTimeString();



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
        <div className='w-11/12 mx-auto my-20'>
            <div className='grid grid-cols-1  md:grid-cols-1  lg:grid-cols-2 justify-center items-center gap-12'>
                <div class="bg-gray-100  shadow-lg p-4 px-4 md:p-8 rounded-2xl">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1">
                        <div class="text-gray-600 mb-10">
                            <p class="font-medium text-lg">Personal Details</p>
                            <p>Please fill out all the fields for billing info.</p>
                        </div>

                        <div class="lg:col-span-2">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                <div class="md:col-span-3 mb-3">
                                    <label for="address">Address / Street</label>
                                    <input onChange={(e) => setAddress(e.target.value)} type="text" name="address" id="address" class="outline-slate-400  h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                </div>

                                <div class="md:col-span-2 mb-3">
                                    <label for="city">City</label>
                                    <input onChange={(e) => setCity(e.target.value)} type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full outline-slate-400 bg-gray-50" placeholder="" />
                                </div>

                                <div class="md:col-span-3 mb-3">
                                    <label for="country">Country / region</label>
                                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <input onChange={(e) => setCountry(e.target.value)} name="country" id="country" class="px-4 h-10 outline- outline-slate-400 text-gray-800 w-full bg-transparent" />
                                    </div>
                                </div>


                                <div class="md:col-span-2">
                                    <label for="zipcode">Zipcode</label>
                                    <input onChange={(e) => setZipcode(e.target.value)} type="text" name="zipcode" id="zipcode" class="transition-all  outline-slate-400 flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                </div>

                                <div class="md:col-span-6">
                                    <label for="notes">Order Notes</label>
                                    <textarea onChange={(e) => setOrderNotes(e.target.value)} name="zipcode" id="zipcode" class="transition-all outline-slate-400 flex items-center h-24 border pt-3 mt-1 rounded px-4 w-full bg-gray-50" placeholder="Notes about your order eg. special notes for delivery" />
                                </div>

                                {/* <div class="md:col-span-5 text-right">
                                    <div class="inline-flex items-end">
                                        <button class="bg-[#368246] hover:bg-[#36824670] hover:text-text-white font-bold py-2 px-4 rounded">Submit</button>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-gray-100 max-w-md pb-5 shadow-xl my-12 grid-cols-1">
                    <div class="card-body">
                        <p className=" text-[#368246] font-bold">Hello ,{user.displayName}</p>
                        <h2>Please Pay $<span class="text-2xl font-bold">
                            {total}</span></h2>
                        <p className="text-[#368246] font-bold">Your ordered list:</p>
                        {
                            cartProducts.map(product =>
                                <p className='border-b border-gray-300 p-1.5'><span className='font-semibold px-3'>{product.quantity}</span> X <span className='font-semibold px-6'>{product.name}</span></p>
                            )
                        }
                    </div>
                    {/* <div className='flex items-center ml-8'>
                        <input type="radio" name="payment" id='delivery-payment' value="Stripe Payment Method" class="radio radio-secondary radio-sm" />
                        <label for="delivery-payment" className='ml-2'>Cash on Delivery</label>
                    </div>
                    <div className='flex items-center ml-8'>
                        <input type="radio" name="payment" id='stripe-payment' value="Stripe Payment Method" class="radio radio-secondary radio-sm" />
                        <label for="stripe-payment" className='ml-2'>Stripe Payment Method</label>
                    </div> */}
                    <div for="stripe-payment" className='border-2 border-gray-200 max-w-md rounded-2xl mx-2 my-3'>
                        <div class="card flex-shrink-0 w-50">
                            <div class="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm cart={cart} setCartProducts={setCartProducts} cartProducts={cartProducts}
                                        total={total}
                                        address={address}
                                        city={city}
                                        country={country}
                                        zipcode={zipcode}
                                        orderNotes={orderNotes}
                                        orderDate={orderDate}
                                        orderTime={orderTime}
                                    />
                                </Elements>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Payment;