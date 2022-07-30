import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AllReviews = ({ allReviews, productId }) => {
    const allReviewsShow = allReviews?.filter(review => review.productId === productId)

    console.log(allReviewsShow)
    // const [reviews, setReviews] = useState({});
    // console.log(productId);
    // useEffect(() => {
    //     const url = `http://localhost:5000/reviews/${productId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    // const { data: allReviews, isLoading, refetch } = useQuery('allReviews', () => fetch(`http://localhost:5000/review/${productId}`).then(res => res.json()));
    // console.log(allReviews);
    // if (isLoading) {
    //     refetch();
    //     return <Loading />
    // }
    //     < div 
    // key = { review._id } 
    // review = { review } >
    //     <p>{review.reviewPersonName}</p>
    //     <p>{review.review}</p>
    //     <p>{review.rating}</p>
    // </>
    return (
        <div>
            {
                allReviews?.filter(review => review.productId == productId)
            }
        </div >
    );
};

export default AllReviews;