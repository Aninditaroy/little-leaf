import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
const Banner = () => {
    return (
        <div>
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active relative float-left w-full">

                        <div className="sm:p-24 bg-[#d47752b0] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:p-0" style={{ height: '750px' }}>
                            <img src='https://i.ibb.co/44Z0Gbj/slider-51-removebg-preview.png' alt="" className='lg:px-40 lg:w-full sm:w-80 lg:m-20 lg:p-0 md:p-0 sm:p-0' />
                            <div>
                                <h1 className='lg:px-10 text-5xl lg:text-5xl lg:ml-11 lg:mt-80 font-bold' style={{ paddingLeft: '15px' }}>Give the gift of Greenery</h1>
                                <h4 className='lg:px-48 text-xl text-slate-300 lg:ml-12 font-regular mt-5' style={{ paddingLeft: '15px' }}>Make your days feeling goods with beautiful plant.Whoever plants, gives God a reason to smile.</h4>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full bottom-0 lg:bottom-20">
                        <div className="sm:p-24 bg-[#F6EDEE] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:p-0" style={{ height: '750px' }}>
                            <img src='https://i.ibb.co/3NtNkcC/bunny-ears-cactus-flowerpot-53876-146249-removebg-preview.png' alt="" className='lg:px-40 lg:w-full sm:w-80 lg:m-20 lg:p-0 md:p-0 sm:p-0' />
                            <div>
                                <h1 className='lg:px-10 text-5xl lg:text-5xl  lg:ml-11 lg:mt-80 font-bold' style={{ paddingLeft: '15px' }}>Go the green way</h1>
                                <h4 className='lg:px-48 text-xl  text-amber-800 lg:ml-12 font-regular mt-5' style={{ paddingLeft: '15px' }}>Let your house have a breath of fresh air.Mother earth is quite happy with your decision..</h4>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full ">

                        <div className="sm:p-24 relative bg-[#B4C3AE] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:p-0 " style={{ height: '750px' }}>
                            <img src=' https://i.ibb.co/k8PtkwZ/1623877401-medium-plant-spider-plant-seafoam-pot-2048x-removebg-preview.png' alt="" className='relative bottom-0 lg:bottom-11 lg:px-40 lg:w-full sm:w-80 lg:m-20 lg:p-0 md:p-0 sm:p-0 ' />
                            <div>
                                {/* <h1 className='lg:px-10 text-5xl lg:text-8xl  lg:ml-11 lg:mt-60 font-bold' style={{ paddingLeft: '15px' }}>Live and let live</h1> */}
                                <h1 className='lg:px-10 text-5xl lg:text-5xl  lg:ml-11 lg:mt-80 font-bold' style={{ paddingLeft: '15px' }}>Grow more and Feel plants</h1>
                                <h4 className='lg:px-48 text-xl  text-amber-800 lg:ml-12 font-regular mt-5' style={{ paddingLeft: '15px' }}>It is time to switch to the green revolution.Green would be your new favorite color soon.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 invisible md:visible lg:visible xl:visible"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 invisible md:visible lg:visible xl:visible"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >

    );
};

export default Banner;