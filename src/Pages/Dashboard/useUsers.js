
import { useQuery } from 'react-query';

const useUsers = () => {
    const { data: users } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    return [users]
};

export default useUsers;