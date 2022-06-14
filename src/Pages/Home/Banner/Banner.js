import React from 'react';

const Banner = () => {
    return (
        <div className='mb-24'>
            <h1>Banner</h1>
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
                    {/* <div className="carousel-item active relative float-left w-full"> 

                    <div className="sm:p-24 bg-[#d47752b0] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:p-0" style={{ height: '750px' }}>
                            <img src='https://i.ibb.co/44Z0Gbj/slider-51-removebg-preview.png' alt="" className='lg:px-40 lg:w-full sm:w-80 lg:m-20 lg:p-0 md:p-0 sm:p-0' />
                            <div>
                                <h1 className='lg:px-10 text-5xl lg:text-5xl lg:ml-11 lg:mt-80 font-bold' style={{ paddingLeft: '15px' }}>Give the gift of Greenery</h1>
                                <h4 className='lg:px-48 text-xl text-slate-300 lg:ml-12 font-regular mt-5' style={{ paddingLeft: '15px' }}>Make your days feeling goods with beautiful plant.Whoever plants, gives God a reason to smile.</h4>
                            </div>
                        </div> 



                     </div> */}


                    {/* original */}

                    <div className="carousel-item active relative float-left w-full">

                        <div className=" p-0 md:p-6  lg:p-24 xl:p-24 2xl:p-24 2xl:py-12  bg-[#c0795db0] " >
                            <div className='w-11/12 md:w-full xl:w-11/12  2xl:w-11/12	 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                                <img src='https://i.ibb.co/44Z0Gbj/slider-51-removebg-preview.png' alt="" className='' style={{ height: '436px', width: '436px' }} />
                                <div className='flex items-center'>
                                    <div className='lg:mt-24'>
                                        <h1 className='lg:px-10 text-5xl md:text-4xl lg:text-5xl lg:ml-11  font-bold' style={{ paddingLeft: '15px' }}>Give the gift of Greenery</h1>
                                        <h4 className='lg:pl-48 text-xl text-slate-300 lg:ml-12 font-regular mt-5 pr-0 mb-10' style={{ paddingLeft: '15px' }}>Make your days feeling goods with beautiful plant.Whoever plants, gives God a reason to smile.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>











                    {/* second item for test */}

                    <div className="carousel-item  relative float-left w-full  ">

                        <div className=" p-0 md:p-6  lg:p-24 xl:p-24 2xl:p-24 2xl:py-12 bg-[#5B6963] " >
                            <div className='w-11/12 md:w-full xl:w-11/12  2xl:w-11/12	 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 '>

                                <img src='https://i.ibb.co/9qmf0g0/Zamioculcas-zamiifolia-ZZ-Plant-Charlie-Plant-Pot-Low-Stand-Grey-Washed-9287300c-e6ca-4a6d-abb0-4d8a.png' alt="" className='' style={{ height: '436px', width: '436px' }} />
                                <div className='flex items-center'>
                                    <div className='lg:mt-24'>
                                        <h1 className='lg:px-10 text-5xl md:text-4xl lg:text-5xl lg:ml-11  font-bold' style={{ paddingLeft: '15px' }}>Go the green way</h1>
                                        <h4 className='lg:pl-48 text-xl text-slate-300 lg:ml-12 font-regular mt-5 pr-0 mb-10' style={{ paddingLeft: '15px' }}>Let your house have a breath of fresh air.Mother earth is quite happy with your decision.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>






                    {/* <!-- Single item 3 --> */}

                    <div className="carousel-item  relative float-left w-full   ">

                        <div className=" p-0 md:p-6  lg:p-24 xl:p-24 2xl:p-24 2xl:py-12 bg-[#B4C3AE] " >
                            <div className='w-11/12 md:w-full xl:w-11/12  2xl:w-11/12	 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 '>

                                {/* <img src='https://i.ibb.co/dGY6Pjc/alex-perri-m2-D-AFu-WV9s-unsplash-removebg-preview.png' alt="" className='' style={{ height: '436px', width: '436px' }} /> */}
                                <img src=' https://i.ibb.co/k8PtkwZ/1623877401-medium-plant-spider-plant-seafoam-pot-2048x-removebg-preview.png' alt="" className='' style={{ height: '436px', width: '436px' }} />
                                <div className='flex items-center'>
                                    <div className='lg:mt-24'>
                                        <h1 className='lg:px-10 text-5xl md:text-4xl lg:text-5xl lg:ml-11  font-bold' style={{ paddingLeft: '15px' }}>Go the green way</h1>
                                        <h4 className='lg:pl-48 text-xl text-slate-300 lg:ml-12 font-regular mt-5 pr-0 mb-10' style={{ paddingLeft: '15px' }}>Let your house have a breath of fresh air.Mother earth is quite happy with your decision.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* <div className="carousel-item relative float-left w-full ">

                        <div className="sm:p-24 relative bg-[#B4C3AE] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:p-0 " style={{ height: '750px' }}>
                            <img src=' https://i.ibb.co/k8PtkwZ/1623877401-medium-plant-spider-plant-seafoam-pot-2048x-removebg-preview.png' alt="" className='relative bottom-0 lg:bottom-11 lg:px-40 lg:w-full sm:w-80 lg:m-20 lg:p-0 md:p-0 sm:p-0 ' />
                            <div>
                                <h1 className='lg:px-10 text-5xl lg:text-5xl  lg:ml-11 lg:mt-80 font-bold' style={{ paddingLeft: '15px' }}>Grow more and Feel plants</h1>
                                <h4 className='lg:px-48 text-xl  text-amber-800 lg:ml-12 font-regular mt-5' style={{ paddingLeft: '15px' }}>It is time to switch to the green revolution.Green would be your new favorite color soon.</h4>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 invisible md:visible lg:visible xl:visible"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >

                    <span className=" bg-slate-700  rounded-full p-1.5  inline-block bg-no-repeat text-white" aria-hidden="true">
                        <i class="uil uil-angle-left text-4xl "></i></span>

                    <span className="visually-hidden ">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 invisible md:visible lg:visible xl:visible"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className=" bg-slate-700  rounded-full p-1.5   inline-block bg-no-repeat" aria-hidden="true"><i class="uil uil-angle-right text-4xl"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div >

    );
};

export default Banner;