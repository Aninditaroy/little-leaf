import { useQuery } from 'react-query';

const useAllReview = (productId) => {
    const { data: allReviews, isLoading, refetch } = useQuery('allReviews', () => fetch(`http://localhost:5000/review`).then(res => res.json()));
    return [allReviews];
};

export default useAllReview;