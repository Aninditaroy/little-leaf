
import { useQuery } from 'react-query';

const useUsers = () => {
    const { data: users } = useQuery('users', () => fetch('https://rocky-anchorage-54101.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    return [users]
};

export default useUsers;