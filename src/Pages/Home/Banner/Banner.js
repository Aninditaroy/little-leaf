import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./Banner.css";
import { Autoplay, Navigation, Pagination } from 'swiper';
const Banner = () => {
    return (
        <>
            {/* <img src="https://i.ibb.co/xzpjTbK/home-1-slide-2.jpg" alt=""
            navigation={true} 
            direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
            /> */}
            <Swiper grabCursor={true} autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide className='carousel-img-animation' >
                    <div style={{ backgroundImage: "url(https://i.ibb.co/xzpjTbK/home-1-slide-2.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        {/* <img src="https://i.ibb.co/xzpjTbK/home-1-slide-2.jpg" alt="" /> */}
                        {/* <div className='w-11/12 md:w-full xl:w-11/12  2xl:w-11/12	 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                            {<img src='https://i.ibb.co/44Z0Gbj/slider-51-removebg-preview.png' alt="" className='max-w-sm' />}
                            <div className='flex items-center'>
                                <div className='lg:mt-24'>
                                    <h1 className='lg:px-10 text-5xl md:text-4xl lg:text-5xl lg:ml-11  font-bold' style={{ paddingLeft: '15px' }}>Give the gift of Greenery</h1>
                                    <h4 className='lg:pl-48 text-xl  lg:ml-12 font-regular mt-5 pr-0 mb-10' style={{ paddingLeft: '15px' }}>Make your days feeling goods with beautiful plant.Whoever plants, gives God a reason to smile.</h4>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='carousel-img-animation'>
                    <div>
                        <img src="https://i.ibb.co/SdvLKZ9/home-1-slide-3.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/zrvf4gm/slider-011.jpg" className='carousel-img-animation' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper >
        </>

    );
};

export default Banner;