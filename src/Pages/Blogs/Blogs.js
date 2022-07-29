import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const navigateToBlogDetails = () => {
        navigate('/blogDetails')
    }
    return (
        <div>
            <div className='bg-bottom' style={{ backgroundImage: ' url(https://landing.engotheme.com/html/plant/demo/images/banner/22.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'center' }}>
                <h2 className='text-3xl lg:text-5xl py-40 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold text-white'>Our Blogs</span></h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full my-24 dark:bg-gray-800 px-5">
                <div onClick={navigateToBlogDetails}
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class="object-cover w-full h-80"
                        src="https://www.happysprout.com/wp-content/uploads/sites/4/2021/02/spraying-pest-control-on-roses.jpg?fit=1024%2C1024&p=1"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <i class="uil uil-eye text-xl"></i>
                        <p class="text-sm text-gray-200">5</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">View</p>
                    </span>


                    <div class="p-3 flex flex-col">
                        <div className='mb-2'>
                            <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#80B435]">Plant Care</a>
                            <p className=' text-xs'>6 min ago</p>
                        </div>
                        <div className='border-b my-3 mx-12'></div>

                        <p rel="noopener noreferrer" href="#" >
                            <h3 className="text-md font-semibold hover:text-[#80B435]">How To Get Rid Of Mealy Bugs</h3>
                        </p>
                        {/* <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p> */}

                    </div>
                </div>
                <div
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class=" object-cover w-full h-80"
                        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F474428695%2F21edb673-0dab-430c-a3d1-83b94da98151%2Fb85ab91f-460a-4baf-9e28-695f030d3322%2F1280x720%2Fmatch%2Fimage.jpg"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <i class="uil uil-eye text-xl"></i>
                        <p class="text-sm text-gray-200">3</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">View</p>
                    </span>


                    <div class="p-3 flex flex-col">
                        <div className='mb-2'>
                            <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#80B435]">Plant Care</a>
                            <p className=' text-xs'>6 min ago</p>
                        </div>
                        <div className='border-b my-3 mx-12'></div>

                        <p rel="noopener noreferrer" href="#" >
                            <h3 className="text-md font-semibold hover:text-[#80B435]">Healthy Benefits of Indoor plants</h3>
                        </p>
                        {/* <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p> */}

                    </div>

                </div>
                <div
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class=" object-cover w-full h-80"
                        src="https://i.ibb.co/w6KP3B4/refresh-modal.jpg"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <i class="uil uil-eye text-xl"></i>
                        <p class="text-sm text-gray-200">4</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">View</p>
                    </span>

                    <div class="p-3 flex flex-col">
                        <div className='mb-2'>
                            <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#80B435]">Plant Care</a>
                            <p className=' text-xs'>6 min ago</p>
                        </div>
                        <div className='border-b my-3 mx-12'></div>

                        <p rel="noopener noreferrer" href="#" >
                            <h3 className="text-md font-semibold hover:text-[#80B435]">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                        </p>
                        {/* <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p> */}

                    </div>

                </div>
                <div
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class=" object-cover w-full h-80"
                        src="https://i.ibb.co/QCM1Pdk/asset-32.webp"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <i class="uil uil-eye text-xl"></i>
                        <p class="text-sm text-gray-200">2</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">View</p>
                    </span>

                    <div class="p-3 flex flex-col">
                        <div className='mb-2'>
                            <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#80B435]">Plant Care</a>
                            <p className=' text-xs'>6 min ago</p>
                        </div>
                        <div className='border-b my-3 mx-12'></div>

                        <p rel="noopener noreferrer" href="#" >
                            <h3 className="text-md font-semibold hover:text-[#80B435]">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                        </p>
                        {/* <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p> */}

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Blogs;