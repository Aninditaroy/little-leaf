import React from 'react';
import useCart from './../../Hooks/useCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51L3QUsDxGuRg5LiuXqrLLOn7UNc2ZdwdhkxBSrdKRUY95Py6ps486A8lWDu1AmFt5s1286v7oQ3wmoAdNwC3o9Bu00NBvxShbB');
const Payment = () => {
    let subtotal = 0;
    let vat = 0;
    let total = 0;
    let shipping = 8;
    const [cartProducts] = useCart();
    // console.log(cartProducts)
    const [user] = useAuthState(auth)
    cartProducts.forEach(product => {
        subtotal += product.price * parseInt(product.quantity);
        vat = subtotal * (0.075);
        total = subtotal + vat + shipping;
    })
    return (
        <div>
            <div className='flex flex-row lg:flex-row gap-8  justify-center my-10'>
                <div className="card w-full max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body">
                        <p >Hello, <span className='text-[#ABD373] font-bold'>{user.displayName}</span></p>
                        <p>Please pay: ${total}</p>
                        {
                            cartProducts.map(product => <p>{product.quantity} X {product.name}</p>)
                        }
                    </div>
                </div>
                <div className="card w-full max-w-md shadow-2xl bg-base-100 my-12">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm total={total} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;