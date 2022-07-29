import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlogs = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    return (
        <div>
            <div className='' style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h2 className='text-2xl lg:text-4xl py-20 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold'>Add Blogs</span></h2>
            </div>

            <div className='bg-gray-50 w-4/6 w- w-3/4  xl:w-1/2 my-16 mx-auto  mt-12 rounded-xl '>
                <div className='w-3/4 w-4/5 w-11/12 w-full mx-auto py-8'>
                    {/* <div className='mb-3'>
                        <h1 className='text-2xl font-bold text-center mt-2 text-[#73AB24]'><i class="uil uil-plus pr-1"></i>Add Product</h1>
                    </div> */}
                    <div className='w-full '>
                        <div className='flex flex-col items-center '>

                            <form className='w-full'>
                                <div class="flex items-center justify-between mt-4">
                                    <div class='w-full md:w-1/2 pr-2'>
                                        <div>
                                            <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Author Name</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' {...register("authorName", {
                                                required: {
                                                    value: true,
                                                    message: "Author name is required"
                                                }
                                            })} />
                                        </div>
                                        {/* <label className="label">
                                            {errors.plantName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.plantName.message}</span>}
                                        </label> */}
                                    </div>

                                    <div class='w-full md:w-1/2 input-bordered'>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' > Categories</label>


                                        {/* <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required /> */}
                                        <select class=' block  text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 app leading-tight input-bordered focus:outline-none  focus:border-gray-500 select w-full max-w-xs' {...register("categories", {
                                            required: {
                                                value: true,
                                                message: "Categories is required"
                                            }
                                        })}>
                                            <option value="Indoor plants">Indoor plants</option>
                                            <option value="Office plants">Office plants</option>
                                            <option value="Outdoor plants">Outdoor plants</option>
                                        </select>
                                        {/* <label className="label">
                                            {errors.categories?.type === 'required' && <span className="label-text-alt text-red-500">{errors.categories.message}</span>}
                                        </label> */}
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <label className="label">
                                        {errors.plantName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.plantName.message}</span>}
                                    </label>
                                    <label className="label">
                                        {errors.categories?.type === 'required' && <span className="label-text-alt text-red-500">{errors.categories.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Description</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="Plant description"
                                        className="input input-bordered h-32 appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                        {...register("description", {
                                            required: {
                                                value: true,
                                                message: "Description is required"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                    </label>
                                </div>
                                <div class="flex items-center justify-between mt-4">
                                    <div class='w-full md:w-1/2  mb-6 pr-2'>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Price</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='number'
                                            {...register("price",
                                                {
                                                    required: {
                                                        value: true,
                                                        message: "Price is required"
                                                    },
                                                    min: {
                                                        value: 1,
                                                        message: `Price must be greater than 0`
                                                    }
                                                }

                                            )} />
                                        <label className="label">
                                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                            {errors.price?.type === 'min' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                        </label>
                                    </div>
                                    <div class='w-full md:w-1/2 mb-6'>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >In Stock</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='number' {...register("inStock", {
                                            required: {
                                                value: true,
                                                message: "Instock is required"
                                            }
                                            ,
                                            min: {
                                                value: 0,
                                                message: `Stock quantity cannot be negative`
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.inStock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.inStock.message}</span>}
                                            {errors.inStock?.type === 'min' && <span className="label-text-alt text-red-500">{errors.inStock.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div class="w-full mb-5">
                                    <label class="block flex flex-col items-center px-4 py-2 border-2 border-dashed text-blue rounded-lg shadow-lg bg-gray-200 border-black/30 tracking-wide uppercase border-blue cursor-pointer">
                                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span class="mt-2 block  tracking-wide text-gray-700 text-xs font-bold mb-2">Select a plant image</span>
                                        <input type='file' class="hidden"
                                            {...register("image", {
                                                required: {
                                                    value: true,
                                                    message: "Please select an image"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                        </label>
                                    </label>
                                    {/* <input type="file" name="chooseFile" id="chooseFile"></input> */}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Image Alt</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Plant Image Alt"
                                        className="input input-bordered appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                        {...register("imageAlt", {
                                            required: {
                                                value: true,
                                                message: "Image alt is required"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.imageAlt?.type === 'required' && <span className="label-text-alt text-red-500">{errors.imageAlt.message}</span>}
                                    </label>
                                </div>
                                <input className='btn w-full flex justify-center items-center mx-auto max-w-xs text-white hover:bg-[#73ab24be]  bg-[#73AB24]  hover:ease-in-out shadow-2xl' type="submit"
                                    value='Save Changes' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlogs;