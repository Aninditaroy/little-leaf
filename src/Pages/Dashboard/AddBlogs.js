import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddBlogs = () => {
    const blogAddDate = new Date().toLocaleDateString("en-US");
    const blogAddTime = new Date().toLocaleTimeString();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const imageStorageKey = '897f17e2399bad4621116b5130fd571a';
    const onSubmit = (data, e) => {
        const formData = new FormData();
        console.log(data);
        const image = data.blogThumbnailImage.image[0];
        formData.append('image', image);
        console.log(data);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const blogThumbnailImage = result.data.url;
                    const blog = {
                        authorName: data.authorName,
                        blogTitle: data.blogTitle,
                        blogCategory: data.blogCategory,
                        blogFirstSectionTitle: data.blogFirstSectionTitle,
                        blogFirstSectionDescription: data.blogFirstSectionDescription,
                        blogSecondSectionTitle: data.blogSecondSectionTitle,
                        blogSecondSectionDescription: data.blogSecondSectionDescription,
                        blogThirdSectionTitle: data.blogThirdSectionTitle,
                        blogThirdSectionDescription: data.blogThirdSectionDescription,
                        blogThumbnailImage: blogThumbnailImage,
                        blogAddDate: blogAddDate,
                        blogAddTime: blogAddTime
                    }
                    // send to my database
                    fetch('http://localhost:5000/blogs', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(added => {
                            // console.log("plant added", added)
                            if (added) {
                                toast.success("New Blog added")
                                reset();
                            }
                            else {
                                toast.error("Failed to add blog!")
                            }
                        })
                }
            })

    }
    return (
        <div>
            <div className='' style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h2 className='text-2xl lg:text-4xl py-20 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold'>Add Blogs</span></h2>
            </div>

            <div className='bg-gray-50 w-4/6 w- w-3/4  xl:w-1/2 my-16 mx-auto  mt-12 rounded-xl '>
                <div className='w-3/4 w-4/5 w-11/12 w-full mx-auto py-8'>

                    <div className='w-full '>
                        <div className='flex flex-col items-center '>

                            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                                <div class=" mt-4">
                                    <div class='w-full  pr-2'>
                                        <div>
                                            <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Author Name</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' {...register("authorName", {
                                                required: {
                                                    value: true,
                                                    message: "Author name is required"
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.authorName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.authorName.message}</span>}
                                            </label>
                                        </div>
                                    </div>


                                </div>

                                <div class="flex items-center justify-between ">
                                    <div class='w-full md:w-1/2  pr-2'>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Blog Title</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'
                                            {...register("blogTitle", {
                                                required: {
                                                    value: true,
                                                    message: "Blog title is required"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.blogTitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogTitle.message}</span>}
                                        </label>
                                    </div>
                                    <div class='w-full md:w-1/2 '>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Blog Category</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' {...register("blogCategory", {
                                            required: {
                                                value: true,
                                                message: "Blog Category is required"
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.blogCategory?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogCategory.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <div class='w-full '>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Blog First Section Title</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'
                                            {...register("blogFirstSectionTitle", {
                                                required: {
                                                    value: true,
                                                    message: "Blog title is required"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.blogFirstSectionTitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogFirstSectionTitle.message}</span>}
                                        </label>
                                    </div>


                                    {/* <div class='w-full md:w-1/2 mb-6'>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Blog Second Section Title</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' {...register("blogSecondSectionTitle", {
                                            required: {
                                                value: true,
                                                message: "Blog Category is required"
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.blogSecondSectionTitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogSecondSectionTitle.message}</span>}
                                        </label>
                                    </div> */}


                                </div>

                                <div class="flex items-center ">

                                    <div class='w-full '>
                                        <label className="label">
                                            <span className="block tracking-wide text-gray-700 text-xs font-bold mb-2">First Blog Section Description</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Blog description"
                                            className="input input-bordered h-24  appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                            {...register("blogFirstSectionDescription", {
                                                required: {
                                                    value: true,
                                                    message: "Blog First Section Description is required"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.blogFirstSectionDescription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogFirstSectionDescription.message}</span>}
                                        </label>
                                    </div>




                                </div>


                                <div class="flex items-center">
                                    <div class='w-full '>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Blog Second Section Title</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'
                                            {...register("blogSecondSectionTitle", {
                                                required: {
                                                    value: true,
                                                    message: "Blog title is required"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.blogSecondSectionTitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogSecondSectionTitle.message}</span>}
                                        </label>
                                    </div>

                                </div>

                                <div class="flex items-center ">

                                    <div class='w-full'>
                                        <label className="label">
                                            <span className="block tracking-wide text-gray-700 text-xs font-bold mb-2">Second Blog Section Description</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Blog description"
                                            className="input input-bordered h-24 appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                            {...register("blogSecondSectionDescription", {
                                                required: {
                                                    value: true,
                                                    message: "Blog Second Description is required"
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.blogSecondSectionDescription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogSecondSectionDescription.message}</span>}
                                        </label>
                                    </div>
                                </div>

                                <div class="flex items-center">
                                    <div className='w-full '>
                                        <div class=''>
                                            <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Blog Third Section Title</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'
                                                {...register("blogThirdSectionTitle", {
                                                    required: {
                                                        value: true,
                                                        message: "Blog title is required"
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.blogThirdSectionTitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogThirdSectionTitle.message}</span>}
                                            </label>
                                        </div>


                                    </div>

                                </div>

                                <div class="flex items-center">

                                    <div class='w-full'>
                                        <label className="label">
                                            <span className="block tracking-wide text-gray-700 text-xs font-bold mb-2">Third Blog Section Description</span>
                                        </label>

                                        <textarea
                                            type="text"
                                            placeholder="Blog description"
                                            className="input input-bordered  h-24  appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                            {...register("blogThirdSectionDescription", {
                                                required: {
                                                    value: true,
                                                    message: "Blog Third Section Description is required"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.blogThirdSectionDescription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogThirdSectionDescription.message}</span>}
                                        </label>
                                    </div>
                                </div>



                                <div class="w-full mb-5">
                                    <label class="block flex flex-col items-center px-4 py-2 border-2 border-dashed text-blue rounded-lg shadow-lg bg-gray-200 border-black/30 tracking-wide uppercase border-blue cursor-pointer">
                                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span class="mt-2 block  tracking-wide text-gray-700 text-xs font-bold mb-2">Blog Thumbnail Image</span>
                                        <input type='file' class="hidden"
                                            {...register("blogThumbnailImage", {
                                                required: {
                                                    value: true,
                                                    message: "Please select an image"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.blogThumbnailImage?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogThumbnailImage.message}</span>}
                                        </label>
                                    </label>
                                </div>
                                <input className='btn w-full flex justify-center items-center mx-auto max-w-xs text-white hover:bg-[#73ab24be]  bg-[#73AB24]  hover:ease-in-out shadow-2xl' type="submit"
                                    value='Add Blogs' />
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddBlogs;