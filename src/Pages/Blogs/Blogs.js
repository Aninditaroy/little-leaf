import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-bottom' style={{ backgroundImage: ' url(https://landing.engotheme.com/html/plant/demo/images/banner/22.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'center' }}>
                <h2 className='text-3xl lg:text-5xl py-40 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold text-white'>Our Blogs</span></h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full my-12 dark:bg-gray-800 px-5">
                <div
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class="object-cover w-full h-80"
                        src="https://i.ibb.co/gWrjvZy/asset-3.webp"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="text-sm text-gray-200">5</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">Available</p>
                    </span>
                    <div class="p-3">
                        <div className="flex items-center justify-between">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#80B435]">Plant Care</a>
                            <p className=' text-xs'>6 min ago</p>
                        </div>
                        <div className='border-b my-3 mx-12'></div>

                        <p rel="noopener noreferrer" href="#" >
                            <h3 className="text-md font-semibold hover:text-[#80B435]">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                        </p>
                        <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p>

                    </div>
                </div>
                <div
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class=" object-cover w-full h-80"
                        src="https://i.ibb.co/QvJrJQg/slider-51.jpg"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="text-sm text-gray-200">3</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500 mr-4 dark:bg-red-700"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">Blocked</p>
                    </span>
                    <div class="p-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <button type="button" title="Like post" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Add a comment" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Share post" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <button type="button" title="Bookmark post" class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center p-3 pb-1">
                        <div class="flex items-center space-x-2">
                            <div class="flex -space-x-1">
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
                            </div>
                            <span class="text-sm">Liked by
                                <span class="font-semibold">Mamba UI</span>and
                                <span class="font-semibold">86 others</span>
                            </span>
                        </div>
                    </div>
                    <div class="space-y-3 p-3">
                        <p class="text-sm">
                            <span class="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
                        </p>
                        <input type="text" placeholder="Add a comment..." class="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100" />
                    </div>
                </div>
                <div
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class=" object-cover w-full h-80"
                        src="https://i.ibb.co/w6KP3B4/refresh-modal.jpg"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="text-sm text-gray-200">4</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-4 dark:bg-yellow-600"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">Scropped</p>
                    </span>
                    <div class="p-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <button type="button" title="Like post" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Add a comment" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Share post" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <button type="button" title="Bookmark post" class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center p-3 pb-1">
                        <div class="flex items-center space-x-2">
                            <div class="flex -space-x-1">
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
                            </div>
                            <span class="text-sm">Liked by
                                <span class="font-semibold">Mamba UI</span>and
                                <span class="font-semibold">86 others</span>
                            </span>
                        </div>
                    </div>
                    <div class="space-y-3 p-3">
                        <p class="text-sm">
                            <span class="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
                        </p>
                        <input type="text" placeholder="Add a comment..." class="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100" />
                    </div>
                </div>
                <div
                    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img class=" object-cover w-full h-80"
                        src="https://i.ibb.co/QCM1Pdk/asset-32.webp"
                        alt="Flower and sky" />
                    <span
                        class="absolute top-0 left-0 flex flex-col items-center mt-3 ml-3 px-2 py-2 rounded-full z-10 bg-yellow-500 text-sm font-medium text-white select-none dark:bg-yellow-600 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="text-sm text-gray-200">2</p>
                    </span>
                    <span
                        class="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 bg-white text-sm font-medium text-white select-none dark:bg-gray-400">
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span>
                        <p class="text-sm text-gray-500 dark:text-gray-100">Available</p>
                    </span>
                    <div class="p-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <button type="button" title="Like post" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Add a comment" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Share post" class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                        <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <button type="button" title="Bookmark post" class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center p-3 pb-1">
                        <div class="flex items-center space-x-2">
                            <div class="flex -space-x-1">
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                                <img alt="" class="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
                            </div>
                            <span class="text-sm">Liked by
                                <span class="font-semibold">Mamba UI</span>and
                                <span class="font-semibold">86 others</span>
                            </span>
                        </div>
                    </div>
                    <div class="space-y-3 p-3">
                        <p class="text-sm">
                            <span class="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
                        </p>
                        <input type="text" placeholder="Add a comment..." class="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;