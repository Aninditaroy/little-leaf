import React from 'react';
import './Charts.css';
import useProducts from './../../Hooks/useProducts';
import useAllReview from './../../Hooks/useAllReview';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ComposedChart, Legend, Bar, Line } from 'recharts';
import useUsers from './useUsers';
import useOrders from './../../Hooks/useOrders';
const Charts = () => {
    const [products] = useProducts();
    const [users] = useUsers();
    const [allReviews] = useAllReview();
    const [orders] = useOrders();
    console.log(orders)

    return (
        <div>
            <div class="min-w-screen flex items-center justify-center px-5 py-5 mt-10">
                <div class="w-full max-w-8xl">
                    <div class="-mx-2 md:flex">
                        <div class="w-full md:w-1/3 px-2">
                            <div class="rounded-lg shadow-sm mb-4 border border-gray-100">
                                <div class="rounded-lg bg-white shadow-xl relative overflow-hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm font-semibold uppercase leading-tight">Total Products</h4>
                                        <h3 class="text-3xl  font-semibold leading-tight my-3 text-green-500"><i class="uil uil-pricetag-alt mr-2"></i>{products?.length}</h3>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <canvas id="chart1" height="70"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2">
                            <div class="rounded-lg shadow-sm mb-4 border border-gray-100">
                                <div class="rounded-lg bg-white shadow-xl relative overflow-hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm font-semibold uppercase leading-tight">Total Users</h4>
                                        <h3 class="text-3xl font-semibold leading-tight my-3 text-green-500"><i class="uil uil-users-alt mr-2"></i>{users?.length}</h3>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <canvas id="chart2" height="70"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2">
                            <div class="rounded-lg shadow-sm mb-4 border border-gray-100">
                                <div class="rounded-lg bg-white shadow-xl relative overflow-hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm font-semibold uppercase leading-tight">Total Reviews</h4>
                                        <h3 class="text-3xl font-semibold leading-tight my-3 text-green-500"><i class="uil uil-comment-alt-dots mr-2"></i>{allReviews?.length}</h3>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <canvas id="chart3" height="70"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2">
                            <div class="rounded-lg shadow-sm mb-4 border border-gray-100">
                                <div class="rounded-lg bg-white shadow-xl relative overflow-hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm font-semibold uppercase leading-tight">Total Orders</h4>
                                        <h3 class="text-3xl font-semibold leading-tight my-3 text-green-500"><i class="uil uil-shopping-bag mr-2"></i>{orders?.length}</h3>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <canvas id="chart2" height="70"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-6 mx-10 gap-5'>
                    <div className='col-span-1 lg:col-span-4 bg-white shadow-2xl my-16 rounded' >
                        <h4 class="text-sm font-semibold uppercase leading-tight text-center mt-5">Instock Vs Product</h4>
                        <div className=' backdrop:px-2 ' style={{ height: 300 }}>
                            <ResponsiveContainer>
                                <AreaChart
                                    data={products}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="plantName" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="inStock" stroke="#224229" fill="#22C55E" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className='col-span-1 lg:col-span-2 bg-white shadow-2xl  my-16 rounded' >
                        <h4 class="text-sm font-semibold uppercase leading-tight text-center mt-5">User Vs Total</h4>
                        <div className=' backdrop:px-2 ' style={{ height: 300 }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    data={orders}
                                    margin={{
                                        top: 10,
                                        right: 0,
                                        bottom: 0,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="userName" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="userName" barSize={40} fill="#22C55E" />
                                    <Line type="monotone" dataKey="total" stroke="#224229" />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Charts;