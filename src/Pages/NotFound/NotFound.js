import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <>
            <div className='flex justify-center'>
                <img src='https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1868.jpg?w=740&t=st=1659969866~exp=1659970466~hmac=9f49050ebcd6d8939eb68d63632ffae92cb704d9d9ae9284e979d4639525bfdb' alt="" className='' />
            </div>
            <Link to='/' className='flex justify-center mb-10 -mt-10'><button className="mb-2 md:mb-0 bg-green-700 border border-green-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-800">Back To Home</button></Link>
        </>
    );
};

export default NotFound;