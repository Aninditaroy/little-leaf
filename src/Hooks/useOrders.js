import { useQuery } from 'react-query';

const useOrders = () => {
    const { data: orders } = useQuery('orders', () => fetch(`http://localhost:5000/orders`).then(res => res.json()));
    return [orders]
};

export default useOrders;