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
        <div className=''>
            <div className='' style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h2 className='text-2xl lg:text-4xl py-20 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold'>All Users</span></h2>
            </div>
            <section class="container mx-auto p-6 font-mono  mt-10 mb-64">
                <div class="w-full mb-8 overflow-hidden ">
                    <div class="w-full overflow-x-auto">
                        <table className=" w-2/3 mt-10 mb-64 mx-auto">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-6  border text-center">ID</th>
                                    <th class="px-4 py-6  border text-center">Name</th>
                                    <th class="px-4 py-6  border text-center">Role</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {
                                    users?.map((user, index) => <UserRow index={index} key={user._id} user={user} refetch={refetch}></UserRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Users;