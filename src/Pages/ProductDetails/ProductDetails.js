import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductDetails from './../../Hooks/useProductDetails';
import { toast } from 'react-toastify';
import useCart from './../../Hooks/useCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails] = useProductDetails(productId);
    const [user] = useAuthState(auth)
    // console.log(user)
    const [cart, setCart] = useState({});
    const [cartProducts, setCartProducts] = useCart();
    const { _id, plantName, price, inStock, description, imageUrl, imageAlt, categories, quantity } = productDetails;
    const navigate = useNavigate();
    const increaseQuantity = () => {
        let qty = parseInt(document.getElementById('quantity-value').value);
        if (!qty) {
            qty = 0;
        }
        document.getElementById('quantity-value').value = qty + 1;
    }
    const decreaseQuantity = () => {
        let qty = parseInt(document.getElementById('quantity-value').value);
        if (qty > 1) {
            document.getElementById('quantity-value').value = qty - 1;
        }
        else {
            document.getElementById('quantity-value').value = qty;
            toast.error('Quantity must be greater than 0')
        }
    }


    const navigateToCart = (id, _id) => {
        navigate('/cart')
        // console.log(user)
        if (user) {
            const cartItems = cartProducts.find(cartProduct => cartProduct.cartId === id);
            // console.log(cartItems)
            let input_quantity = document.getElementById('quantity-value').value;

            if (!input_quantity) {
                input_quantity = 1
            }
            if (!cartItems) {

                const cart = {
                    cartId: id,
                    name: plantName,
                    img: imageUrl,
                    imgAlt: imageAlt,
                    quantity: input_quantity,
                    price: price,
                    description: description,
                    email: user.email
                }


                //send to cart api
                // fetch('http://localhost:5000/cart', {
                fetch('http://localhost:5000/cart', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cart)
                })
                    .then(res => res.json())
                    .then(added => {
                        if (added) {
                            toast.success("Product added to Cart!")
                        }
                        else {
                            toast.error("Failed add to your Cart!")
                        }
                    })
            }

            if (cartItems) {
                let prevQuantity = parseInt(cartItems.quantity);
                let quantityFinal = parseInt(input_quantity) + parseInt(prevQuantity);

                const cart = {
                    quantity: quantityFinal,
                }

                // //send to cart api
                const url = `http://localhost:5000/carts/${cartItems._id}`
                fetch(url, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(cart),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast.success("Quantity Updated")
                        }
                        else {
                            toast.error("Failed to update quantity!")
                        }
                    })
            }
        }
    }

    return (


        <div className='mb-14 ' >
            <div className='bg-[#F6F7FB] flex justify-center  pb-32 pt-16'>
                <img src={imageUrl} alt={imageAlt} className="hover:scale-110 transition-all transform duration-700" />

            </div>
            <div className='bg-white w-4/6  xl:w-1/2 py-16 mx-auto -my-20  mb-24 rounded-xl shadow-xl'>
                <div className='w-3/4 mx-auto'>
                    <div className='mb-3'>
                        <h2 className='text-3xl font-semibold text-center'>{plantName}</h2>
                        <h1 className='text-2xl font-bold text-center mt-2 text-[#73AB24]'>${price}</h1>
                    </div>
                    <div>
                        <p className=' text-justify'> {description}</p>
                        <h1 className='text-md mt-8'><span className='text-lg font-bold mr-1'>Categories:</span><span className='badge bg-[#73ab24] p-3 text-white'>{categories}</span></h1>

                        <h1 className='text-md mt-1 mb-4'><span className='text-lg font-bold mr-1'>Stock:</span><span className='font-medium'>{inStock}</span></h1>
                        <hr />

                        <div className='flex flex-col md:flex-row md:items-center'>
                            <div className='flex flex-row items-center'>
                                <span className='text-lg font-bold mr-1'>Quantity</span>
                                <div className='flex flex-row items-center justify-around py-1 px-3  w-1/2 md:w-2/5  lg:w-2/5 xl:w-2/5 my-5 rounded-md bg-[#F6F7FB] '>
                                    <span>
                                        <button onClick={increaseQuantity}>
                                            {/* <i class="uil uil-plus"></i> */}
                                            <i class="uil uil-plus-circle text-[#73AB24] text-xl"></i>
                                        </button>
                                    </span>
                                    <span>
                                        <input type="number" defaultValue='1' placeholder='1' className='w-full text-center text-black bg-[#F6F7FB]' id='quantity-value' />
                                    </span>
                                    <span>
                                        <button onClick={decreaseQuantity}>
                                            {/* <i class="uil uil-minus"></i> */}
                                            <i class="uil uil-minus-circle text-[#73AB24] text-xl "></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div >
                                <div class=" flex items-center w-full  ml-auto">
                                    <button onClick={() => navigateToCart(_id)} type="submit" class="flex items-center px-5 py-2  text-sm text-center  text-white  hover:bg-[#73ab24be]  bg-[#73AB24]  hover:border-0  hover:duration-500 hover:ease-in-out  shadow-2xl hover:scale-110 border-white rounded-md  uppercase w-40"><span className='mr-1'>Add to Cart</span> <i class="uil uil-shopping-cart-alt text-lg"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default ProductDetails;