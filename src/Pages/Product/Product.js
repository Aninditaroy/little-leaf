import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({ product }) => {
    const { _id, plantName, imageUrl, description, price, imageAlt, inStock } = product;
    const navigate = useNavigate();
    const navigateToProductDetails = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div class="shadow-lg rounded-2xl lg:max-w-xs bg-white mx-auto  p-2 mb-12">
            <div className='p-3 effect4'>
                <img src={imageUrl} alt={imageAlt} class="w-full p-4  m-auto bg-[#F5F5F5]" />
                <button onClick={() => navigateToProductDetails(_id)}> <span><i class="uil uil-eye text-3xl"></i></span></button>
            </div>

            <div class="bg-white m-3 p-4 rounded-lg">
                <p class="text-black text-xl font-bold ">
                    {plantName}
                </p>
                <h1 className='text-sm mt-1 mb-4'><span className='font-bold mr-1'>Stock:</span><span className='font-medium'>{
                    (inStock < 1) ? <span className='text-red-500'>Out of stock</span>
                        :
                        <span>{inStock}</span>
                }</span></h1>
                <div class="flex items-center justify-between">
                    <p class="text-black font-semibold">
                        <span className=' font-extrabold text-xl '>&#2547;</span>{price}
                    </p>
                    <button onClick={() => navigateToProductDetails(_id)} product-bs-toggle="carttip" title="Add To Cart" type="button" class="w-12 h-12 text-base font-medium rounded-full text-white bg-green-700 hover:bg-green-600 mt-2">
                        <i class="uil uil-shopping-cart-alt w-16 h-16 text-2xl"></i>
                    </button>
                </div>

            </div>
        </div >
    );
};

export default Product;