import { useQuery } from 'react-query';

const useOrders = () => {
    const { data: orders } = useQuery('orders', () => fetch(`https://rocky-anchorage-54101.herokuapp.com/orders`).then(res => res.json()));
    return [orders]
};

export default useOrders;