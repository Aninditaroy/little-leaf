import React from 'react';
import { useState } from 'react';
import useProducts from './../../Hooks/useProducts';


const CartScreen = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center my-10">Shopping Cart</h1>


        </div >
    );
};

export default CartScreen;