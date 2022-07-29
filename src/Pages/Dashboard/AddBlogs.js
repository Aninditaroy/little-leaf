import React from 'react';

const AddBlogs = () => {
    return (
        <div>
            <div className='' style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h2 className='text-2xl lg:text-4xl py-20 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold'>Add Blogs</span></h2>
            </div>

            <div>
                <div class=" w-4/6 mx-auto my-12  p-6 shadow-lg">

                    <div class="mt-5 md:mt-0 ">
                        <form action="#" method="POST">
                            <div class="shadow sm:rounded-md sm:overflow-hidden">
                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div class="grid grid-cols-2 gap-6">
                                        <div class="col-span-2">
                                            <div class="relative h-10 input-component  empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
                                                <input id="authorName" type="text" name="authorName" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
                                                <label for="authorName" class="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0 labelClass">
                                                    Author Name
                                                </label>
                                            </div>

                                            <div class="relative h-10 input-component  empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">

                                                <div class="shrink-0">
                                                    {/* <img class="object-cover w-16 h-16 rounded-full"
                                                        src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png" alt="profile photo" /> */}
                                                </div>
                                                <label for="last" class="absolute left-2 transition-all bg-white px-1 pb-1 text-green-600 text-xs top-0 labelClass ">
                                                    Click To Choose Author Image
                                                </label>
                                                <input type="file"
                                                    class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />

                                            </div>


                                            {/* <div class="relative h-10 input-component  empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
                                                <input id="last" type="file" name="last" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm pt-1.5" />
                                                <label for="last" class="absolute left-2 transition-all bg-white px-3 pr-3.5 py-2 pb-1 text-green-600 text-xs top-0 labelClass ">
                                                    Click To Choose Author Image
                                                </label>
                                            </div> */}

                                        </div>
                                    </div>

                                    <div>
                                        <div class="grid grid-cols-2 gap-6">
                                            <div class="col-span-2">
                                                <div class="relative h-10 input-component  empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
                                                    <input id="blogCategory" type="text" name="blogCategory" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
                                                    <label for="blogCategory" class="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0 labelClass">
                                                        Blog Category
                                                    </label>
                                                </div>
                                                <div class="relative h-10 input-component  empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
                                                    <input id="blogTitle" type="text" name="blogTitle" class="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
                                                    <label for="blogTitle" class="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0 labelClass">
                                                        Blog Title
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">
                                            Photo
                                        </label>
                                        <div class="mt-1 flex items-center">
                                            <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                            <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Change
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">
                                            Cover photo
                                        </label>
                                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3  text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddBlogs;