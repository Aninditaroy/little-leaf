import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./Banner.css";
import { Autoplay, Navigation, Pagination } from 'swiper';
const Banner = () => {
    return (
        <>

            <Swiper
                style={{
                    "--swiper-pagination-color": "#7F9E65",
                    "--swiper-navigation-color": "#FDFEFD",
                    "--swiper-pagination-bullet-size": "15px",
                    "--swiper-theme-color": "#7F9E65",
                    "--swiper-pagination-bullet-horizontal-gap": "15px"


                }}
                grabCursor={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide className='h-14' >
                    <div className='relative flex items-center'>
                        <img src="https://i.ibb.co/xzpjTbK/home-1-slide-2.jpg" alt="" className=' carousel-img-animation  ' />
                        <div className=' absolute  top-11  w-3/6 
                         lg:top-28 xl:top-48  2xl:top-60 '
                        >
                            <div className='invisible sm:invisible md:visible lg:visible xl:visible flex  items-center flex-col justify-center '>
                                <h1 className=' text-3xl md:text-4xl lg:text-4xl xl:text-5xl   font-bold' >Give the gift of Greenery</h1>
                                <h4 className='text-lg lg:text-xl  font-regular mt-5 md:mt-3 pr-0 mb-4 w-full  lg:w-11/12 xl:w-4/6 2xl:w-7/12 2xl:w-3/6' >Make your days feeling goods with beautiful plant.Whoever plants, gives God a reason to smile.</h4>
                                {/* <div class=" rounded-lg sm:mt-0 text-xl   font-regular pr-0 mb-10">
                                    <button type="submit" class="items-center block px-12 py-3 text-base font-medium text-center text-  text-white hover:text-black hover:bg-white  bg-[#3c7116a0]  hover:border-0  hover:duration-500 hover:ease-in-out  shadow-2xl  border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-2xl uppercase button_slide slide_right">Shop Now</button>
                                </div> */}
                                <button class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-[#3c7116a0] hover:bg-[#3c7116]">
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
                </SwiperSlide>
                <SwiperSlide className='h-14' >
                    <div className='relative flex items-center'>
                        <img src="https://i.ibb.co/SdvLKZ9/home-1-slide-3.jpg" alt="" className=' carousel-img-animation  ' />
                        <div className=' absolute  top-11  w-3/6 
                         lg:top-28 xl:top-48  2xl:top-60 '
                        >
                            <div className='invisible sm:invisible md:visible lg:visible xl:visible flex  items-center flex-col justify-center '>
                                <h1 className=' text-3xl md:text-4xl lg:text-4xl xl:text-5xl   font-bold' >Grow more and Feel plants</h1>
                                <h4 className='text-lg lg:text-xl  font-regular mt-5 md:mt-3 pr-0 mb-4 w-full  lg:w-11/12 xl:w-4/6 2xl:w-7/12 2xl:w-3/6' >It is time to switch to the green revolution.Green would be your new favorite color soon.</h4>
                                <button class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-[#3c7116a0] hover:bg-[#3c7116]">
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
                </SwiperSlide>
                <SwiperSlide className='h-14' >
                    <div className='relative flex items-center'>
                        <img src="https://i.ibb.co/zrvf4gm/slider-011.jpg" alt="" className=' carousel-img-animation  ' />
                        <div className=' absolute  top-11  w-3/6 
                         lg:top-28 xl:top-48  2xl:top-60 '
                        >
                            <div className='invisible sm:invisible md:visible lg:visible xl:visible flex  items-center flex-col justify-center '>
                                <h1 className=' text-3xl md:text-4xl lg:text-4xl xl:text-5xl   font-bold' >Go the green way</h1>
                                <h4 className='text-lg lg:text-xl  font-regular mt-5 md:mt-3 pr-0 mb-4 w-full  lg:w-11/12 xl:w-4/6 2xl:w-7/12 2xl:w-3/6' >Let your house have a breath of fresh air.Mother earth is quite happy with your decision.</h4>
                                <button class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-[#3c7116a0] hover:bg-[#3c7116]">
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
                </SwiperSlide>


            </Swiper >
        </>

    );
};

export default Banner;