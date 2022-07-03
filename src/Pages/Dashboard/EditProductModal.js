import React from 'react';
import { useForm } from 'react-hook-form';

const EditProductModal = ({ editingProduct, refetch, setEditingProduct }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = (data, e) => {
        // const handleEditProduct = (event) => {
        //     event.preventDefault();
        //     const name = event.target.name.value;
        //     const description = event.target.description.value;
        //     console.log(name, description)

        //     const updatedUser = { name, description };

        //     // send data to the server
        //     const url = `https://young-chamber-03759.herokuapp.com/task/${taskId}`
        //     fetch(url, {
        //         method: 'put',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(updatedUser)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log('success', data);
        //             toast.success("Task Updated successfully!!")
        //             navigate('/todo')
        //             event.target.reset();
        //         })

        // }
    }


    return (




        // <div>
        //     <div class="fixed  top-48 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        //         id="edit-manage-product-modal" tabindex="-1" aria-labelledby="edit-manage-product-modal" aria-hidden="true">
        //         <div class="sm:h-[calc(100%-3rem)] max-w-lg my-6 mx-auto relative w-auto pointer-events-none">
        //             <div
        //                 class="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        //                 <div
        //                     class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        //                     <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
        //                         Modal title
        //                     </h5>
        //                     <button type="button"
        //                         class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
        //                         data-bs-dismiss="modal" aria-label="Close"></button>
        //                 </div>
        //                 <div class="flex-auto overflow-y-auto relative p-4">
        //                     <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
        //                     <br /><br /><br /><br /><br /><br /><br /><br /><br />
        //                     <br /><br /><br /><br /><br /><br /><br /><br /><br />
        //                     <br /><br /><br /><br /><br /><br /><br /><br /><br />
        //                     <br /><br /><br /><br /><br /><br /><br /><br /><br />
        //                     <br /><br /><br /><br /><br /><br /><br /><br /><br />
        //                     <p>This content should appear at the bottom after you scroll.</p>
        //                 </div>
        //                 <div
        //                     class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        //                     <button type="button"
        //                         class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        //                         data-bs-dismiss="modal">
        //                         Close
        //                     </button>
        //                     <button type="button"
        //                         class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
        //                         Save changes
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>












        <div className='h-96'>
            <div className='fixed  top-48 left-0 w-full h-96 outline-none overflow-x-auto overflow-y-auto'>
                <input type="checkbox" id="edit-manage-product-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle overflow-y-auto">
                    <div className="modal-box overflow-y-auto">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 pr-2'>
                                    <div>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Plant Name</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' {...register("plantName", {
                                            required: {
                                                value: true,
                                                message: "Plant name is required"
                                            }
                                        })} />
                                    </div>
                                    {/* <label className="label">
                                            {errors.plantName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.plantName.message}</span>}
                                        </label> */}
                                </div>

                                <div class='w-full md:w-1/2 input-bordered'>
                                    <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' > Categories</label>
                                    {/* <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required /> */}
                                    <select class=' block  text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 app leading-tight input-bordered focus:outline-none  focus:border-gray-500 select w-full max-w-xs' {...register("categories", {
                                        required: {
                                            value: true,
                                            message: "Categories is required"
                                        }
                                    })}>
                                        <option value="Indoor plants">Indoor plants</option>
                                        <option value="Office plants">Office plants</option>
                                        <option value="Outdoor plants">Outdoor plants</option>
                                    </select>
                                    {/* <label className="label">
                                            {errors.categories?.type === 'required' && <span className="label-text-alt text-red-500">{errors.categories.message}</span>}
                                        </label> */}
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <label className="label">
                                    {errors.plantName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.plantName.message}</span>}
                                </label>
                                <label className="label">
                                    {errors.categories?.type === 'required' && <span className="label-text-alt text-red-500">{errors.categories.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Description</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Plant description"
                                    className="input input-bordered h-32 appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Description is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2  mb-6 pr-2'>
                                    <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Price</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='number'
                                        {...register("price",
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Price is required"
                                                },
                                                min: {
                                                    value: 1,
                                                    message: `Price must be greater than 0`
                                                }
                                            }

                                        )} />
                                    <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                        {errors.price?.type === 'min' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                    </label>
                                </div>
                                <div class='w-full md:w-1/2 mb-6'>
                                    <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >In Stock</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='number' {...register("inStock", {
                                        required: {
                                            value: true,
                                            message: "Instock is required"
                                        }
                                        ,
                                        min: {
                                            value: 0,
                                            message: `Stock quantity cannot be negative`
                                        }
                                    })} />
                                    <label className="label">
                                        {errors.inStock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.inStock.message}</span>}
                                        {errors.inStock?.type === 'min' && <span className="label-text-alt text-red-500">{errors.inStock.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div class="w-full mb-5">
                                <label class="block flex flex-col items-center px-4 py-2 border-2 border-dashed text-blue rounded-lg shadow-lg bg-gray-200 border-black/30 tracking-wide uppercase border-blue cursor-pointer">
                                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span class="mt-2 block  tracking-wide text-gray-700 text-xs font-bold mb-2">Select a plant image</span>
                                    <input type='file' class="hidden"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: "Please select an image"
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                    </label>
                                </label>
                                {/* <input type="file" name="chooseFile" id="chooseFile"></input> */}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Image Alt</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Plant Image Alt"
                                    className="input input-bordered appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                    {...register("imageAlt", {
                                        required: {
                                            value: true,
                                            message: "Image alt is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.imageAlt?.type === 'required' && <span className="label-text-alt text-red-500">{errors.imageAlt.message}</span>}
                                </label>
                            </div>
                            <input className='btn w-full flex justify-center items-center mx-auto max-w-xs text-white hover:bg-[#73ab24be]  bg-[#73AB24]  hover:ease-in-out shadow-2xl' type="submit"
                                value='Save Changes' />
                        </form>






                        <div className="modal-action text-center space-x-4 md:block">
                            <div className="p-3  mt-2 text-center space-x-4 md:block">
                                <label for="edit-manage-product-modal" className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 ">
                                    Cancel
                                </label>


                                {/* <button onClick={() => handleEditProduct(deletingProduct._id)} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button> */}
                            </div>
                        </div>



                        {/* <div className="modal-action">
            <label for="edit-manage-product-modal" className="btn">Cancel</label>
            <button className="btn  btn-error">Delete</button>
        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductModal;