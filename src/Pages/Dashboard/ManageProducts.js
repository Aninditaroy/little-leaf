import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    // const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://secret-peak-21813.herokuapp.com/tool', {
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));
    // const [deletingTool, setDeletingTool] = useState(null);
    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <div>
            <h2>Manage your products</h2>

            <>
                <h2 className='text-2xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Manage Tools</span></h2>
                <div className="overflow-x-auto">
                    <table className="table w-4/6 mt-10 mb-64 mx-auto">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image & Name</th>
                                <th>Categories</th>
                                <th>Price</th>
                                <th>InStock</th>
                                <th className='pl-16'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                tools.map((tool, index) => <ManageProductsRow 
                                    key={tool._id}
                                    tool={tool}
                                    refetch={refetch}
                                    setDeletingTool={setDeletingTool}
                                    index={index} />)
                            } */}
                            <tr>
                                <th>1</th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">name</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='break-all'>description</td>
                                <td>min_order_quantity</td>
                                <td>available_quantity</td>
                                <td className=''>
                                    {/* edit button */}
                                    <label
                                        for="delete-confirm-modal"
                                        className='mr-2'
                                    >
                                        <button class="bg-blue-100 hover:bg-blue-200  text-grey-darkest font-bold py-1 px-4 rounded-full inline-flex items-center">
                                            <i class="uil uil-edit text-blue-500 font-bold text-lg pr-1"></i>
                                            <span>Edit</span>
                                        </button>
                                    </label>
                                    {/* delete button */}
                                    <label
                                        for="delete-confirm-modal" >
                                        <button class="bg-red-100 hover:bg-red-200 text-grey-darkest font-bold py-1 px-4 rounded-full inline-flex items-center">
                                            <i class="uil uil-times-circle text-red-500  font-bold text-lg pr-1"></i>
                                            <span>Delete</span>
                                        </button>
                                    </label>
                                </td>
                            </tr >



                        </tbody>
                    </table>
                </div>
                {/* {
                deletingTool && <DeleteConfirmModal
                    deletingTool={deletingTool}
                    refetch={refetch}
                    setDeletingTool={setDeletingTool}
                />
            } */}
            </ >



        </div>
    );
};

export default ManageProducts;