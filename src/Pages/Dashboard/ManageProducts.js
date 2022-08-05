import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import ManageProductsRow from './ManageProductsRow';
import DeleteProductModal from './DeleteProductModal';
import EditProductModal from './EditProductModal';

const ManageProducts = () => {
    const { data: manageProducts, isLoading, refetch } = useQuery('manageProducts', () => fetch('http://localhost:5000/product').then(res => res.json()));

    // console.log(manageProducts);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className=''>

            <>
                <div className='' style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <h2 className='text-2xl lg:text-4xl py-20 text-center my-orders-font'><span className='font-bold md:font-extrabold lg:font-extrabold'>Manage Products</span></h2>
                </div>
                <section className='container mx-auto p-6 font-mono  mt-10 mb-64 lg:w-11/12 xl:w-3/4'>
                    <div className="overflow-x-auto">
                        <div class="w-full mb-8 overflow-hidden ">
                            <div class="w-full overflow-x-auto  shadow-lg">
                                <table class="w-full">
                                    <thead>
                                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100  border-b border-gray-600">
                                            <th class="px-4 py-5 border text-center">ID</th>
                                            <th class="px-4 py-5 border text-center">Image & Name</th>
                                            <th class="px-4 py-5 border text-center">Categories</th>
                                            <th class="px-4 py-5 border text-center">Price</th>
                                            <th class="px-4 py-5 border text-center">InStock</th>
                                            <th className='px-4 py-5 border text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            manageProducts.map((manageProduct, index) => <ManageProductsRow
                                                key={manageProduct._id}
                                                manageProduct={manageProduct}
                                                refetch={refetch}
                                                setDeletingProduct={setDeletingProduct}
                                                setEditingProduct={setEditingProduct}
                                                index={index} />)
                                        }


                                    </tbody>
                                </table>
                            </div>
                            {
                                deletingProduct && <DeleteProductModal
                                    deletingProduct={deletingProduct}
                                    refetch={refetch}
                                    setDeletingProduct={setDeletingProduct}
                                />
                            }
                            {
                                editingProduct && <EditProductModal
                                    editingProduct={editingProduct}
                                    refetch={refetch}
                                    setEditingProduct={setEditingProduct}
                                />
                            }
                        </ div>


                    </div>
                </section>

            </>
        </div>

    );
};

export default ManageProducts;