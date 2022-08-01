import React from 'react';
import SingleReview from './SingleReview';

const AllReviews = ({ allReviewsShow }) => {
    return (
        <>
            {
                allReviewsShow.length > 1 ? <>
                    <h2 class="text-3xl font-bold  text-center">Reviews</h2>
                    <div class="p-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        {
                            allReviewsShow?.map(singleReview => <SingleReview singleReview={singleReview} key={singleReview._id}></SingleReview>)
                        }
                    </div>
                </>
                    :
                    <p className='my-40 text-center text-gray-700 font-semibold'>There's no review yet.</p>
            }

        </>
    );
};

export default AllReviews;