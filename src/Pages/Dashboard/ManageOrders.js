import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageOrdersRow from './ManageOrdersRow';


const ManageOrders = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)

    const size = 10;
    // const { data: manageOrders, isLoading, refetch } = useQuery('manageOrders', () => fetch('http://localhost:5000/orders').then(res => res.json()));

    const { data: manageOrders, isLoading, refetch } = useQuery(['manageOrders', page, size], () => fetch(`http://localhost:5000/orders?page=${page}&size=${size}`).then(res => res.json()));


    useEffect(() => {
        // fetch('http://localhost:5000/product')
        fetch('http://localhost:5000/productCountOrder')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])

    // console.log(manageOrders);
    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>

            <div className='' style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h2 className='text-2xl lg:text-4xl py-20 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold'>Manage Orders</span></h2>
            </div>
            <section class="container p-6 font-mono  mt-10 mb-64 mx-auto">
                <div class="w-full mb-8 overflow-hidden shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-4 border">User Info</th>
                                    <th class="px-4 py-4 border">Address</th>
                                    <th class="px-4 py-4 border">Price</th>
                                    <th class="px-4 py-3">Status</th>
                                    <th class="px-4 py-4 border">Order Date</th>
                                    <th class="px-4 py-4 border">Transaction Id</th>
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
                <div class="btn-group mx-auto justify-center">
                    {/* <button class="btn">1</button>
                    <button class="btn btn-active">2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button> */}
                    {
                        [...Array(pageCount).keys()].map(number => <button onClick={() => setPage(number)} className={page === number ? "btn btn-active" : 'btn '}
                        >{number + 1}</button>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ManageOrders;