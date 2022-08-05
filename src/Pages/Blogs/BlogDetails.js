import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState({});
    useEffect(() => {
        // const url = `http://localhost:5000/product/${id}`
        const url = `http://localhost:5000/blog/${blogId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogDetails(data))
    }, [])
    const { authorName, blogCategory, blogFirstSectionTitle, blogFirstSectionDescription, blogSecondSectionTitle, blogSecondSectionDescription, blogThirdSectionTitle, blogThirdSectionDescription, blogThumbnailImage, blogTitle, _id, blogAddDate, blogAddTime } = blogDetails;

    return (
        <div class="bg-[#F6F7FB]">
            <div className='pt-5'>

                <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                    style={{ height: '24em' }} >
                    <div class="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}
                    ></div>
                    <img src={blogThumbnailImage} class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                    <div class="p-4 absolute bottom-0 left-0 z-20">
                        <span
                            class="px-4 py-1 bg-transparent border-2 rounded-full text-gray-200 inline-flex items-center justify-center mb-2">{blogCategory}</span>
                        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                            {blogTitle}
                        </h2>
                        <div class="flex mt-3">
                            <img src='https://i.ibb.co/VCVRm0w/avatar-4.jpg'
                                class="h-10 w-10 rounded-full mr-2 object-cover" />
                            <div>
                                <p class="font-semibold text-gray-200 text-sm"> {authorName} </p>
                                <p class="font-semibold text-gray-400 text-xs"> {blogAddDate} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <span className='text-xl font-bold'> {blogFirstSectionTitle}</span> <br />
                    <p class="pb-6">{blogFirstSectionDescription}</p>





                    <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                        <span className='text-xl font-bold'> {blogSecondSectionTitle}</span> <br />
                        {blogSecondSectionDescription}
                    </div>



                    <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">{blogThirdSectionTitle}</h2>

                    <p class="pb-6">{blogThirdSectionDescription}</p>


                </div>
            </div>
        </div>
    );
};

export default BlogDetails;