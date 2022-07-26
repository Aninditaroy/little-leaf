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
                <h2 className='text-2xl text-center'><span className='border-b-2 border-green-200 font-semibold'>Manage Products</span></h2>
                <div className="overflow-x-auto">
                    <table className="table w-4/6 mt-10 mb-64 mx-auto p-10">
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
            </ >



        </div>
    );
};

export default ManageProducts;