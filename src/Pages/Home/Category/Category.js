import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate = useNavigate();
    const navigateToProducts = () => {
        navigate('/products')
    }
    return (
        <div className="mx-auto py-5 px-4 w-full max-w-md sm:max-w-2xl lg:max-w-7xl">
            <div className="grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-6 lg:grid-flow-col gap-5">

                {/* :TITLE */}
                <h2 className="sr-only">Categories preview</h2>



                {/* :CATEGORY 1 -> LARGEST, LEFT */}
                <div className="order-1 lg:row-span-2 col-span-3 relative shadow rounded-md overflow-hidden bg-pink-100 filter hover:shadow-lg hover:brightness-125">
                    <div className="pt-8 pb-20 px-5 block w-full h-full">
                        {/* ::Background Picture */}
                        <div>
                            {/* :::picture */}
                            <img src="https://i.ibb.co/7ksz4mP/photo-1475783006851-1d68dd683eff.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                            {/* :::overlay */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
                        </div>

                        {/* ::Category Infos */}
                        <div className="relative h-full flex flex-col items-start text-white mt-24">
                            {/* :::name */}
                            {/* :::badge tag */}
                            <span className="mt-4 inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Popular</span>
                            <h3 className="text-2xl font-playfair tracking-wider leading-relaxed antialiased">
                                <p className="text-4xl fonr-boldfont-light">Office Plants</p>
                                <h3 className="text-xl font-playfair tracking-wide leading-relaxed antialiased">Collection</h3>
                            </h3>

                            {/* :::collection */}
                            <button onClick={navigateToProducts} class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-[#3c7116a0] hover:bg-[#3c7116] mr-1">
                                <span class="relative text-lg text-white uppercase">Shop Now</span>
                                <div class="flex items-center -space-x-3 translate-x-3">
                                    <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>


                {/* :CATEGORY 2 -> SMALL, CENTER LEFT */}
                <div className="order-2 sm:row-span-1  md:row-span-1 lg:row-span-1 col-span-full sm:col-span-3 relative shadow rounded-md overflow-hidden bg-gray-800 filter hover:shadow-lg hover:brightness-125">
                    <div className="py-5 px-5 block w-full h-full">
                        {/* ::Background Picture */}
                        <div>
                            {/* :::picture */}
                            <img src="https://images.unsplash.com/photo-1519227647225-55190834e06b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                            {/* :::overlay */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
                        </div>
                        {/* ::Category Infos */}
                        <div className="pt-10 relative h-full flex flex-col justify-end items-start text-white">
                            {/* :::description */}
                            <p className="text-lg font-light">Indoor Plants</p>
                            {/* :::name */}
                            <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Collection</h3>
                            <button onClick={navigateToProducts} class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-[#3c7116a0] hover:bg-[#3c7116] mr-1">
                                <span class="relative text-lg text-white uppercase">Shop Now</span>
                                <div class="flex items-center -space-x-3 translate-x-3">
                                    <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>



                {/* :CATEGORY 3 -> LARGE, CENTER BOTTOM*/}
                <div className="order-4 sm:row-span-1 md:row-span-1 lg:row-span-1 col-span-full sm:col-span-3 relative shadow rounded-md overflow-hidden bg-gray-800 filter hover:shadow-lg hover:brightness-125">
                    <div className="py-5 px-5 block w-full h-full">
                        {/* ::Background Picture */}
                        <div>
                            {/* :::picture */}
                            {/* <img src="https://images.unsplash.com/photo-1527863280617-15596f92e5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="absolute inset-0 w-full h-full object-cover object-center" /> */}
                            <img src="https://images.unsplash.com/photo-1577987934003-572ac8b72ad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                            {/* :::overlay */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
                        </div>
                        {/* ::Category Infos */}
                        <div className="pt-10 relative h-full flex flex-col justify-end items-start text-white">
                            {/* :::description */}
                            <p className="text-lg font-light">Outdoor Plants</p>
                            {/* :::name */}
                            <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Collection</h3>
                            <button onClick={navigateToProducts} class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-[#3c7116a0] hover:bg-[#3c7116] mr-1">
                                <span class="relative text-lg text-white uppercase">Shop Now</span>
                                <div class="flex items-center -space-x-3 translate-x-3">
                                    <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;