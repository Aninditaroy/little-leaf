import React from 'react';
import ReactStars from 'react-stars';

const SingleReview = ({ singleReview }) => {
    const { reviewPersonName, review, rating } = singleReview;
    return (
        <>
            <div class="bg-white  border border-gray-200 p-5 my-2">
                <div className='flex items-center mb-2'>
                    <div class="w-14 h-14 mr-3">
                        <p class="w-full h-full rounded-full bg-[#7fb4359b] flex justify-center items-center">
                            <svg stroke="currentColor" fill="currentColor" className='text-white' stroke-width="0" viewBox="0 0 16 16" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path></svg>
                        </p>
                    </div>

                    <p class="font-bold text-lg">
                        {reviewPersonName}
                    </p>
                </div>
                <div>
                    {/* <span class="mb-2 ">Rated <strong class="rating">5</strong> out of {rating}</span> */}
                    <ReactStars
                        count={5}
                        edit={false}
                        value={rating}
                        size={24}
                        color2={'#ffd700'} />
                    <p class="mb-2">{review}</p>
                </div>
            </div>
        </>

    );
};

export default SingleReview;