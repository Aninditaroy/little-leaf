import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogsRow = ({ blog }) => {
    const navigate = useNavigate();
    const { authorName, blogCategory, blogFirstSectionTitle, blogFirstSectionDescription, blogSecondSectionTitle, blogSecondSectionDescription, blogThirdSectionTitle, blogThirdSectionDescription, blogThumbnailImage, blogTitle, _id, blogAddDate, blogAddTime } = blog;
    const navigateToBlogDetails = (id) => {
        navigate(`/blog/${id}`)
    }
    return (
        <div
            onClick={() => { navigateToBlogDetails(_id) }}
            class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
            <img class="object-cover w-full h-80"
                src={blogThumbnailImage}
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
                    <p className=' text-xs text-slate-400 float-right'>{blogAddDate}</p>
                </div>

                <div className="flex items-center justify-between">
                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#80B435]">{blogCategory}</a>
                    <p className=' text-xs'>{blogAddTime}</p>
                </div>
                <div className='border-b my-3 mx-12'></div>

                <p rel="noopener noreferrer" href="#" >
                    <h3 className="text-md font-semibold hover:text-[#80B435]">{blogTitle}</h3>
                </p>
                {/* <p className=' text-xs text-slate-400 float-right'>FEBRUARY 22, 2017</p> */}

            </div>
        </div>
    );
};

export default BlogsRow;