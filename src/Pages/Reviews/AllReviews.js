import React from 'react';
import SingleReview from './SingleReview';

const AllReviews = ({ allReviewsShow }) => {
    return (
        <>
            <h2 class="text-3xl font-bold mb-12 text-center">Reviews</h2>

            {
                allReviewsShow?.map(singleReview => <SingleReview singleReview={singleReview} key={singleReview._id}></SingleReview>)

            }


        </>
    );
};

export default AllReviews;