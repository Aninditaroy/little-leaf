import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const EditProductModal = ({ editingProduct, refetch, setEditingProduct, }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const imageStorageKey = '897f17e2399bad4621116b5130fd571a';
    const { categories, description, imageAlt, imageUrl, inStock, plantName, price, _id } = editingProduct;
    let plantImage = imageUrl;

    let plant;


    const onSubmit = (data, e) => {
        const formData = new FormData();
        const image = data.image[0];
        console.log("image", formData)

        if (image) {

            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

            //send to imagebb
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const img = result.data.url;
                        // if (img) {
                        //     plantImage = img;
                        // }
                        plant = {
                            plantName: data.plantName,
                            imageUrl: img,
                            imageAlt: data.imageAlt,
                            categories: data.categories,
                            inStock: data.inStock,
                            price: data.price,
                            description: data.description
                        }
                        console.log("plant from edit product modal", plant);

                        //send to my database
                        // const { data: editProduct, isLoading, refetch } = useQuery('editProduct', () => {
                        //     fetch(`http://localhost:5000/product/${_id}`, {
                        //         method: "PATCH",
                        //         headers: {
                        //             'content-type': 'application/json',
                        //             // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        //         },
                        //         body: JSON.stringify(plant)
                        //     })
                        //         .then(res => res.json())
                        //         .then(added => {
                        //             console.log("plant added", added)
                        //             if (added) {
                        //                 toast.success("Product updated!")
                        //                 reset();
                        //             }
                        //             else {
                        //                 toast.error("Failed to update the product!")
                        //             }
                        //         })
                        // })



                        //send to my database
                        fetch(`http://localhost:5000/product/${_id}`, {
                            method: "PATCH",
                            headers: {
                                'content-type': 'application/json',
                                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(plant)
                        })
                            .then(res => res.json())
                            .then(added => {
                                console.log("plant added", added)
                                if (added) {
                                    toast.success("Product updated!")
                                    setEditingProduct(null);
                                    refetch();
                                    reset();
                                }
                                else {
                                    toast.error("Failed to update the product!")
                                }
                            })





                    }
                })


        }
        else {
            plant = {
                plantName: data.plantName,
                imageUrl: plantImage,
                imageAlt: data.imageAlt,
                categories: data.categories,
                inStock: data.inStock,
                price: data.price,
                description: data.description
            }
            console.log("plant from edit product modal else", plant);
            //send to my database
            fetch(`http://localhost:5000/product/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(plant)
            })
                .then(res => res.json())
                .then(added => {
                    console.log("plant added", added)
                    if (added) {
                        toast.success("Product updated!")
                        setEditingProduct(null);
                        refetch();
                        reset();
                    }
                    else {
                        toast.error("Failed to update the product!")
                    }
                })

        }












        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        // //send to imagebb
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.success) {
        //             const img = result.data.url;
        //             if (img) {
        //                 plantImage = img;
        //             }
        //             const plant = {
        //                 plantName: data.plantName,
        //                 imageUrl: plantImage,
        //                 imageAlt: data.imageAlt,
        //                 categories: data.categories,
        //                 inStock: data.inStock,
        //                 price: data.price,
        //                 description: data.description
        //             }
        //             console.log("plant from edit product modal", plant);
        //             //send to my database
        //             // fetch('https://rocky-anchorage-54101.herokuapp.com/product', {
        //             //     method: "POST",
        //             //     headers: {
        //             //         'content-type': 'application/json',
        //             //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //             //     },
        //             //     body: JSON.stringify(plant)
        //             // })
        //             //     .then(res => res.json())
        //             //     .then(added => {
        //             //         // console.log("plant added", added)
        //             //         if (added) {
        //             //             toast.success("Plant added")
        //             //             reset();
        //             //         }
        //             //         else {
        //             //             toast.error("Failed to add plant!")
        //             //         }
        //             //     })
        //         }
        //     })











    }


    const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        console.log(e.target.files)
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };




    return (


        <div className=' '>
            <div className='EditProductModal  outline-none overflow-x-auto overflow-y-auto'>
                <input type="checkbox" id="edit-manage-product-modal" className="modal-toggle " />
                <div className="modal modal-bottom sm:modal-middle mt-44 w-full ">
                    <div className="modal-box overflow-y-auto h-5/6 w-full">
                        <div className='flex items-center justify-center'>
                            <img src={imageUrl} alt="" className='w-28 h-28' />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='py-16'>
                            <div class="flex items-center justify-between mt-4 ">
                                <div class='w-full md:w-1/2 pr-2'>
                                    <div>
                                        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Plant Name</label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' defaultValue={plantName} type='text' {...register("plantName")} />
                                    </div>

                                </div>

                                <div class='w-full md:w-1/2 input-bordered'>
                                    <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' > Categories</label>

                                    <select class=' block  text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 app leading-tight input-bordered focus:outline-none  focus:border-gray-500 select w-full max-w-xs' defaultValue={categories} {...register("categories")}>
                                        <option value="Indoor plants">Indoor plants</option>
                                        <option value="Office plants">Office plants</option>
                                        <option value="Outdoor plants">Outdoor plants</option>
                                    </select>
                                </div>
                            </div>


                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Description</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Plant description"
                                    className="input input-bordered h-32 appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" defaultValue={description}
                                    {...register("description")}
                                />

                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2  mb-6 pr-2'>
                                    <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Price</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' defaultValue={price} type='number'
                                        {...register("price",
                                            {
                                                min: {
                                                    value: 1,
                                                    message: `Price must be greater than 0`
                                                }
                                            }

                                        )} />
                                    <label className="label">
                                        {errors.price?.type === 'min' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                    </label>
                                </div>
                                <div class='w-full md:w-1/2 mb-6'>
                                    <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >In Stock</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' defaultValue={inStock} type='number' {...register("inStock", {
                                        min: {
                                            value: 0,
                                            message: `Stock quantity cannot be negative`
                                        }
                                    })} />
                                    <label className="label">

                                        {errors.inStock?.type === 'min' && <span className="label-text-alt text-red-500">{errors.inStock.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div class="w-full mb-5">

                                <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' >Upload Image</label>

                                <label class="block flex flex-col items-center px-4 py-2 border-2 border-dashed text-blue rounded-lg shadow-lg bg-gray-200 border-black/30 tracking-wide uppercase border-blue cursor-pointer">


                                    <input type='file'
                                        // defaultValue={imageUrl}
                                        accept="image/png, image/jpg, image/jpeg, image/pdf"
                                        onChange={imageChange}
                                        {...register("image")} />

                                </label>


                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Image Alt</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={imageAlt}
                                    className="input input-bordered appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                    {...register("imageAlt")}
                                />

                            </div>



                            {/* <div className="modal-action text-center space-x-4 md:block">
                                <div className="p-3  mt-2 text-center space-x-4 md:block">
                                    <label for="delete-manage-product-modal" className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 ">
                                        Cancel
                                    </label>


                                    <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                                </div>
                            </div> */}









                            <div className="modal-action text-center  flex items-center justify-center  w-1/3 mx-auto ">
                                <div className="p-3  mt-2 text-center  ">
                                    <input className='btn mb-2 md:mb-0 bg-[#73AB24]  border border-[#73AB24] px-8 py-2 text-sm font-medium tracking-wider   hover:bg-gray-100  text-white rounded-full hover:shadow-lg hover:bg-[#73ab24be]  shadow-xl
                                    
                                    ' type="submit"
                                        value='Update' />

                                </div>
                                <div className="p-3  mt-2 text-center  ">
                                    <label for="edit-manage-product-modal" className="btn mb-2 md:mb-0 bg-white  px-8 py-2 text-sm font-medium tracking-wider border text-gray-600 rounded-full shadow-xl hover:shadow-lg hover:bg-gray-100 ">
                                        Cancel
                                    </label>



                                </div>
                            </div>


                        </form>










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