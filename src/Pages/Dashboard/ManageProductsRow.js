import React from 'react';

const ManageProductsRow = ({ manageProduct, index, setDeletingProduct, setEditingProduct }) => {
    const { price, categories, description, imageAlt, imageUrl, plantName, inStock, _id } = manageProduct;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-20 h-20">
                                <img src={imageUrl} alt={imageAlt} />
                            </div>
                        </div>
                        <div>
                            <div class="font-bold">{plantName}</div>
                        </div>
                    </div>
                </td>
                <td className='break-all'>{categories}</td>
                <td> <span className='text-lg font-semibold'>$</span>{price}</td>
                <td>{inStock}</td>

                <td className=''>
                    {/* edit button */}



                    <button class="bg-blue-100 hover:bg-blue-200 text-grey-darkest font-bold py-1 px-4 rounded-full inline-flex items-center">
                        <label onClick={() => setEditingProduct(manageProduct)}
                            for="edit-manage-product-modal" >
                            <i class="uil uil-edit text-blue-500 font-bold text-lg pr-1"></i>
                            <span>Edit</span>
                        </label>
                    </button>



                    {/* <label
                        for="delete-manage-product-modal"
                        className='mr-2'
                    >
                        <button class="bg-blue-100 hover:bg-blue-200  text-grey-darkest font-bold py-1 px-4 rounded-full inline-flex items-center">
                            <i class="uil uil-edit text-blue-500 font-bold text-lg pr-1"></i>
                            <span>Edit</span>
                        </button>
                    </label> */}


                    {/* delete button */}

                    <button class="bg-red-100 hover:bg-red-200 text-grey-darkest font-bold py-1 px-4 rounded-full inline-flex items-center">
                        <label onClick={() => setDeletingProduct(manageProduct)}
                            for="delete-manage-product-modal" >
                            <i class="uil uil-times-circle text-red-500  font-bold text-lg pr-1"></i>
                            <span>Delete</span>
                        </label>
                    </button>


                </td>



            </tr >
        </>
    );
};

export default ManageProductsRow;