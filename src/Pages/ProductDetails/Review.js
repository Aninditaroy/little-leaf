import React from 'react';

const Review = () => {
    return (
        <div className=' w-4/6 mx-auto grid grid-cols-2 gap-9'>


            <div class="container w-full mx-auto items-center text-center bg-white rounded drop-shadow-lg px-5 md:px-0 col-span-1">
                <div class="pt-8 font-bold text-2xl tracking-wide">Customer reviews</div>
                <div class="flex mt-4 justify-center">
                    <div
                        class="flex items-center inline-block py-3 px-2.5 space-x-2 leading-none text-center whitespace-nowrap align-baseline text-sm bg-gray-200 text-dark rounded-full">
                        <div class="items-center">
                            <ul class="flex justify-center">
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                        class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                        class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                        class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                        class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                                        class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                                        </path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div class="items-center font-bold">3.9/5</div>
                    </div>
                </div>
                <div class="text-xs">40 customer reviews</div>
                <div class="pt-6 flex items-center justify-center">
                    <ul class="flex flex-col w-full">
                        <li class="flex flex-row">
                            <div class="flex mx-auto justify-center items-center space-x-3 p-2 text-center">
                                <div class="flex text-black text-xs">
                                    5
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-48 bg-gray-200 h-3 rounded-md">
                                    <div class="bg-green-600 h-3 rounded-md" style={{ width: '40%' }}></div>
                                </div>
                                <div class="text-black text-xs">40%</div>
                            </div>
                        </li>
                        <li class="flex flex-row">
                            <div class="flex mx-auto justify-center items-center space-x-3 p-2 text-center">
                                <div class="flex text-black text-xs">
                                    4
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-48 bg-gray-200 h-3 rounded-md">
                                    <div class="bg-green-500 h-3 rounded-md" style={{ width: '30%' }}></div>
                                </div>
                                <div class="text-black text-xs">30%</div>
                            </div>
                        </li>
                        <li class="flex flex-row">
                            <div class="flex mx-auto justify-center items-center space-x-3 p-2 text-center">
                                <div class="flex text-black text-xs">
                                    3
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-48 bg-gray-200 h-3 rounded-md">
                                    <div class="bg-yellow-500 h-3 rounded-md" style={{ width: '15%' }}></div>
                                </div>
                                <div class="text-black text-xs">15%</div>
                            </div>
                        </li>
                        <li class="flex flex-row">
                            <div class="flex mx-auto justify-center items-center space-x-3 p-2 text-center">
                                <div class="flex text-black text-xs">
                                    2
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-48 bg-gray-200 h-3 rounded-md">
                                    <div class="bg-yellow-600 h-3 rounded-md" style={{ width: '10%' }}></div>
                                </div>
                                <div class="text-black text-xs">10%</div>
                            </div>
                        </li>
                        <li class="flex flex-row">
                            <div class="flex mx-auto justify-center items-center space-x-3 p-2 text-center">
                                <div class="flex text-black text-xs">
                                    1
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-48 bg-gray-200 h-3 rounded-md">
                                    <div class="bg-red-500 h-3 rounded-md" style={{ width: '5%' }}></div>
                                </div>
                                <div class="text-black text-xs">05%</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="mt-3 pb-8 items-center">
                    <a href="#"
                        class="px-2 py-2 text-xs text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-200 hover:text-black">View
                        all reviews</a>
                </div>
            </div>





            <div class=" container w-full mx-auto bg-white rounded drop-shadow-lg px-5 md:px-0">
                <div className='bg-white p-10 flex flex-col rounded-xl mx-auto  max-w-lg col-span-1'>
                    <h1 class="text-4xl font-medium">Contact us</h1>
                    <p class="mt-3">Email us at help@domain.com or message us here:</p>

                    <form action="https://api.web3forms.com/submit" class="mt-10">



                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                        <div class="grid gap-6 sm:grid-cols-2">
                            <div class="relative z-0">
                                <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                            </div>
                            <div class="relative z-0">
                                <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                            </div>
                            <div class="relative z-0 col-span-2">
                                <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                            </div>
                        </div>
                        <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;