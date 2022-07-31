import React, { useEffect, useState } from 'react';

const AllReviews = ({ allReviewsShow }) => {


    return (
        <div>
            {
                allReviewsShow?.map(review => <p>{review.reviewPersonName}</p>)
            }

            <>

            </>
        </div >
    );
};

export default AllReviews;