import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import BlogsRow from './BlogsRow';

const Blogs = () => {
    const navigate = useNavigate();
    const navigateToBlogDetails = () => {
        navigate('/blogDetails')
    }

    const { data: blogs, isLoading, refetch } = useQuery('blogs', () => fetch('https://rocky-anchorage-54101.herokuapp.com/blogs').then(res => res.json()));
    // console.log(manageOrders);
    if (isLoading) {
        <Loading></Loading>
    }
    console.log(blogs);

    return (
        <div>
            <div className='bg-bottom' style={{ backgroundImage: ' url(https://landing.engotheme.com/html/plant/demo/images/banner/22.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'center' }}>
                <h2 className='text-3xl lg:text-5xl py-40 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold text-white'>Our Blogs</span></h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full my-24 dark:bg-gray-800 px-5">
                {
                    blogs?.map(blog => <BlogsRow
                        key={blog._id}
                        blog={blog}
                    ></BlogsRow>)
                }




            </div>
        </div >
    );
};

export default Blogs;