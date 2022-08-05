import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

const useAllReview = (productId) => {
    // const { data: allReviews, isLoading, refetch } = useQuery('allReviews', () => fetch(`http://localhost:5000/review`).then(res => res.json()));
    // return [allReviews, refetch, isLoading];
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [allReviews]);
    return [allReviews];
};

export default useAllReview;