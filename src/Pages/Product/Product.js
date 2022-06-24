import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({ product }) => {

    const { id, plantName, imageUrl, description, price, imageAlt } = product;
    const navigate = useNavigate()
    const navigateToProductDetails = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div class="shadow-lg rounded-2xl lg:max-w-xs bg-white m-auto  p-2 mb-12">
            <div className='p-3 effect4'>
                <img src={imageUrl} alt={imageAlt} class="w-full p-4  m-auto bg-[#F5F5F5]" />
                <button onClick={() => navigateToProductDetails(id)}> <span><i class="uil uil-eye text-3xl"></i></span></button>
            </div>
            <div class="bg-white m-3 p-4 rounded-lg">
                <p class="text-black text-xl font-bold ">
                    {plantName}
                </p>
                <p class="text-gray-500 text-xs">
                    {description}
                </p>
                <div class="flex items-center justify-between ">
                    <p class="text-black">
                        ${price}
                    </p>
                    <button data-bs-toggle="tooltip" title="Add To Cart" type="button" class="w-12 h-12 text-base font-medium rounded-full text-white bg-green-700 hover:bg-green-600">
                        <i class="uil uil-shopping-cart-alt w-16 h-16 text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;