import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageOrdersRow from './ManageOrdersRow';


const ManageOrders = () => {

    const { data: manageOrders, isLoading, refetch } = useQuery('manageOrders', () => fetch('http://localhost:5000/orders').then(res => res.json()));
    // console.log(manageOrders);
    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-center'><span className='border-b-2 border-green-200 font-semibold'>Manage Orders</span></h2>
            <section class="container mx-auto p-6 font-mono  mt-10 mb-64 mx-auto">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-3">User Info</th>
                                    <th class="px-4 py-3">Address</th>
                                    <th class="px-4 py-3">Price</th>
                                    <th class="px-4 py-3">Status</th>
                                    <th class="px-4 py-3">Order Date</th>
                                    <th class="px-4 py-3">Transaction Id</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">


                                {
                                    manageOrders?.map(singleOrder =>
                                        <ManageOrdersRow
                                            singleOrder={singleOrder}
                                            key={singleOrder._id}
                                            refetch={refetch}
                                        ></ManageOrdersRow>
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

export default ManageOrders;