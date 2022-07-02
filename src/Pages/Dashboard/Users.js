import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';
import Loading from './../Shared/Loading/Loading';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-24'>
            <h2 className='text-2xl text-center'><span className='border-b-2 border-green-200 font-semibold'>All Users</span></h2>
            <div className="overflow-x-auto container">
                <table className="table  w-2/3 mt-10 mb-64 mx-auto">
                    <thead className='bg-white border-b'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow index={index} key={user._id} user={user} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Users;