import React from 'react';
import { useState } from 'react';
import PlantCare from '../PlantCare/PlantCare';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Facilities from './Facilities/Facilities';
import Story from './Story/Story';
import Tabs from './Tabs/Tabs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Story />
            <PlantCare />
            <Tabs />
            <Contact />
            <Facilities />


            <div className="mx-auto py-5 px-4 w-full max-w-md sm:max-w-2xl lg:max-w-7xl">
                <div className="grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-6 lg:grid-flow-col gap-5">

                    {/* :TITLE */}
                    <h2 className="sr-only">Categories preview</h2>



                    {/* :CATEGORY 1 -> LARGEST, LEFT */}
                    <div className="order-1 lg:row-span-2 col-span-3 relative shadow rounded-md overflow-hidden bg-pink-100 filter hover:shadow-lg hover:brightness-125">
                        <a href="#link" className="pt-8 pb-20 px-5 block w-full h-full">
                            {/* ::Background Picture */}
                            <div>
                                {/* :::picture */}
                                <img src="https://fancytailwind.com/static/model-woman2-ee6e3c8ec2648417a86c813d9acd0ac3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                                {/* :::overlay */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
                            </div>
                            {/* ::Category Infos */}
                            <div className="relative h-full flex flex-col items-start text-white">
                                {/* :::name */}
                                <h3 className="text-3xl font-playfair tracking-wider leading-relaxed antialiased">
                                    <span className="block">Women</span>
                                    <span className="block">Collection</span>
                                </h3>
                                {/* :::collection */}
                                <p className="mt-4 text-base font-medium font-serif">Summer 2022</p>
                                {/* :::badge tag */}
                                <span className="mt-4 inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Popular</span>
                            </div>
                        </a>
                    </div>


                    {/* :CATEGORY 2 -> SMALL, CENTER LEFT */}
                    <div className="order-2 sm:row-span-1  md:row-span-1 lg:row-span-1 col-span-full sm:col-span-3 relative shadow rounded-md overflow-hidden bg-gray-800 filter hover:shadow-lg hover:brightness-125">
                        <a href="#link" className="py-5 px-5 block w-full h-full">
                            {/* ::Background Picture */}
                            <div>
                                {/* :::picture */}
                                <img src="https://fancytailwind.com/static/model-accessories1-b4739ca1decc6649c1bb240fedf4d7fe.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                                {/* :::overlay */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
                            </div>
                            {/* ::Category Infos */}
                            <div className="pt-10 relative h-full flex flex-col justify-end items-start text-white">
                                {/* :::description */}
                                <p className="text-sm font-light">To have that <br /> "je ne sais quoi"</p>
                                {/* :::name */}
                                <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Men Accessories</h3>
                            </div>
                        </a>
                    </div>



                    {/* :CATEGORY 3 -> LARGE, CENTER BOTTOM*/}
                    <div className="order-4 sm:row-span-1 md:row-span-1 lg:row-span-1 col-span-full sm:col-span-3 relative shadow rounded-md overflow-hidden bg-gray-800 filter hover:shadow-lg hover:brightness-125">
                        <a href="#link" className="py-5 px-5 block w-full h-full">
                            {/* ::Background Picture */}
                            <div>
                                {/* :::picture */}
                                <img src="https://fancytailwind.com/static/model-accessories1-b4739ca1decc6649c1bb240fedf4d7fe.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                                {/* :::overlay */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
                            </div>
                            {/* ::Category Infos */}
                            <div className="pt-10 relative h-full flex flex-col justify-end items-start text-white">
                                {/* :::description */}
                                <p className="text-sm font-light">To have that <br /> "je ne sais quoi"</p>
                                {/* :::name */}
                                <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Men Accessories</h3>
                            </div>
                        </a>
                    </div>



                </div>
            </div>





        </div>
    );
};

export default Home;