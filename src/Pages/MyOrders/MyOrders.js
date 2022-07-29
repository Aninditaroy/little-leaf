import React from 'react';
import Loading from '../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import MyOrdersRow from './MyOrdersRow';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useState } from 'react';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    // const[myOrders, setMyOrders] = useState([]);
    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`http://localhost:5000/myorders/${email}`).then(res => res.json()));

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/${email}`)
    //         .then(res => res.json())
    //         .then(data => setMyOrders(data))
    // }, [myOrders])

    // console.log(email);
    console.log(myOrders);
    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>

            {/* <div className='bg-[#F0F0F0] py-24'> */}
            <div className='' style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h2 className='text-2xl lg:text-5xl py-20 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold'>My Orders</span></h2>
            </div>

            <section class="container mx-auto p-6 font-mono  mt-10 mb-64">
                <div class="w-full mb-8 overflow-hidden ">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-6  border">User Name</th>
                                    <th class="px-4 py-6  border">Address</th>
                                    <th class="px-4 py-6  border">Ordered Item</th>
                                    <th class="px-4 py-6  border">Total</th>
                                    <th class="px-4 py-6  border">Order Date</th>
                                    <th class="px-4 py-6  border">Transaction Id</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">

                                {
                                    myOrders?.map(order =>
                                        <MyOrdersRow
                                            order={order}
                                            key={order._id}
                                            refetch={refetch}
                                        ></MyOrdersRow>
                                    )
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyOrders;