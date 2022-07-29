import React from 'react';

const ManageProductsRow = ({ manageProduct, index, setDeletingProduct, setEditingProduct, refetch }) => {
    const { price, categories, description, imageAlt, imageUrl, plantName, inStock, _id } = manageProduct;
    return (
        <>
            <tr>
                <td className='bg-gray-100/50 text-center font-bold border'>{index + 1}</td>
                <td className='border px-3'>
                    <div class="flex items-center">
                        <img src={imageUrl} alt={imageAlt} className='w-20 h-20 px-4' />
                        <span class="font-bold">{plantName}</span>
                    </div>
                </td>
                <td className='break-all border text-center px-3'>{categories}</td>
                <td className='border text-center'> <span className=' font-bold text-md'>&#2547;</span>{price}</td>
                <td className='border text-center'>{inStock}</td>

                <td className='border'>
                    {/* edit button */}

                    <div className='flex justify-center mx-auto'>
                        <div className='pr-2'>
                            <button class="bg-blue-100 hover:bg-blue-200 text-grey-darkest font-bold py-1 px-4 rounded-full inline-flex items-center">
                                <label onClick={() => setEditingProduct(manageProduct)}
                                    for="edit-manage-product-modal" >
                                    <i class="uil uil-edit text-blue-500 font-bold text-lg pr-1"></i>
                                    <span>Edit</span>
                                </label>
                            </button>
                        </div>

                        <div>
                            <button class="bg-red-100 hover:bg-red-200 text-grey-darkest font-bold py-1 px-4 rounded-full inline-flex items-center">
                                <label onClick={() => setDeletingProduct(manageProduct)}
                                    for="delete-manage-product-modal" >
                                    <i class="uil uil-times-circle text-red-500  font-bold text-lg pr-1"></i>
                                    <span>Delete</span>
                                </label>
                            </button>
                        </div>
                    </div>

                </td>



            </tr >
        </>
    );
};

export default ManageProductsRow;