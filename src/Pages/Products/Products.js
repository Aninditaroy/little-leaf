import React from 'react';
import './Products.css';
const Products = () => {
    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div class="shadow-lg rounded-2xl lg:max-w-xs bg-white m-auto  p-2 mb-36">
                        <div className='p-3 effect4'>
                            <img src="https://i.ibb.co/XWp7XNd/asset-25-removebg-preview.png" alt="adidas" class="w-full p-4  m-auto bg-[#F5F5F5]" />
                            <a href="#"><i class="uil uil-eye text-3xl"></i></a>
                        </div>
                        <div class="bg-white m-3 p-4 rounded-lg">
                            <p class="text-black text-xl font-bold ">
                                Snake Plant
                            </p>
                            <p class="text-gray-500 text-xs">
                                Green Leafed Potted Plant
                            </p>
                            <div class="flex items-center justify-between ">
                                <p class="text-black">
                                    $98.00
                                </p>
                                <button data-bs-toggle="tooltip" title="Add To Cart" type="button" class="w-12 h-12 text-base font-medium rounded-full text-white bg-green-700 hover:bg-green-600">
                                    <i class="uil uil-shopping-cart-alt w-16 h-16 text-2xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="shadow-lg rounded-2xl lg:max-w-xs bg-white m-auto  p-2 mb-36">
                        <div className='p-3  effect4'>
                            <img src="https://i.ibb.co/3T5n7rL/asset-30-removebg-preview.png" alt="adidas" class="w-full p-4  m-auto bg-[#F5F5F5]" />
                            <a href="#"><i class="uil uil-eye text-3xl"></i></a>
                        </div>
                        <div class="bg-white m-3 p-4 rounded-lg">
                            <p class="text-black text-xl font-bold ">
                                Terrarium plants
                            </p>
                            <p class="text-gray-500 text-xs">
                                Green Leafed Potted Plant
                            </p>
                            <div class="flex items-center justify-between ">
                                <p class="text-black">
                                    $98.00
                                </p>
                                <button data-bs-toggle="tooltip" title="Add To Cart" type="button" class="w-12 h-12 text-base font-medium rounded-full text-white bg-green-700 hover:bg-green-600">
                                    <i class="uil uil-shopping-cart-alt w-16 h-16 text-2xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="shadow-lg rounded-2xl lg:max-w-xs bg-white m-auto  p-2 mb-36">
                        <div className='p-3  effect4'>
                            <img src="https://i.ibb.co/Ykr5XqZ/asset-28-removebg-preview.png" alt="adidas" class="w-full p-4  m-auto bg-[#F5F5F5]" />
                            <a href="#"><i class="uil uil-eye text-3xl"></i></a>
                        </div>
                        <div class="bg-white m-3 p-4 rounded-lg">
                            <p class="text-black text-xl font-bold ">
                                Leaf Plant
                            </p>
                            <p class="text-gray-500 text-xs">
                                Green Leafed Potted Plant
                            </p>
                            <div class="flex items-center justify-between ">
                                <p class="text-black">
                                    $98.00
                                </p>
                                <button data-bs-toggle="tooltip" title="Add To Cart" type="button" class="w-12 h-12 text-base font-medium rounded-full text-white bg-green-700 hover:bg-green-600">
                                    <i class="uil uil-shopping-cart-alt w-16 h-16 text-2xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="shadow-lg rounded-2xl lg:max-w-xs bg-white m-auto  p-2 mb-36">
                        <div className='p-3  effect4'>
                            <img src="https://i.ibb.co/4SH42pm/asset-27-removebg-preview.png" alt="adidas" class="w-full p-4  m-auto bg-[#F5F5F5]" />
                            <a href="#"><i class="uil uil-eye text-3xl"></i></a>
                        </div>
                        <div class="bg-white m-3 p-4 rounded-lg">
                            <p class="text-black text-xl font-bold ">
                                Cactus Plant
                            </p>
                            <p class="text-gray-500 text-xs">
                                Green Leafed Potted Plant
                            </p>
                            <div class="flex items-center justify-between ">
                                <p class="text-black">
                                    $98.00
                                </p>
                                <button data-bs-toggle="tooltip" title="Add To Cart" type="button" class="w-12 h-12 text-base font-medium rounded-full text-white bg-green-700 hover:bg-green-600">
                                    <i class="uil uil-shopping-cart-alt w-16 h-16 text-2xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;