import React from 'react';
import { useState } from 'react';
import useCart from './../../Hooks/useCart';
import CartScreenRow from './CartScreenRow';
import DeleteCartModal from './DeleteCartModal';

const CartScreen = () => {
    const [cartProducts] = useCart();
    const [deletingCart, setDeletingCart] = useState(null)
    return (
        <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center my-10">Shopping Cart</h1>
            {/* {
                cartProducts.map(cart => <div
                    cart={cart}
                    key={cart._id}
                    class="card card-side bg-base-100 shadow-xl">
                    <figure><img src={cart.img} alt={cart.imgAlt} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{cart.name}</h2>
                        <p>{cart.description}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Proceed to checkout</button>
                        </div>
                    </div>
                </div>)
            } */}



            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    {/* <div>
                        <h2 class="text-2xl font-bold leading-tight">Invoices</h2>
                    </div> */}
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-5 border-b-2 border-gray-200 bg-[#E8F2EB] text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Plant Image
                                        </th>
                                        <th
                                            class="px-5 py-5 border-b-2 border-gray-200 bg-[#E8F2EB] text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Plant Name
                                        </th>
                                        <th
                                            class="px-5 py-5 border-b-2 border-gray-200 bg-[#E8F2EB] text-left text-xs font-bold text-gray-700 uppercase tracking-wider" >
                                            Price
                                        </th>
                                        <th
                                            class="px-5 py-5 border-b-2 border-gray-200 bg-[#E8F2EB] text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th
                                            class="px-5 py-5 border-b-2 border-gray-200 bg-[#E8F2EB] text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th class="px-5 py-5 border-b-2 border-gray-200 bg-[#E8F2EB] text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartProducts.map(cart => <CartScreenRow
                                            cart={cart}
                                            key={cart._id}
                                            setDeletingCart={setDeletingCart}
                                        >
                                        </CartScreenRow>
                                        )}
                                </tbody>
                            </table>
                            {
                                deletingCart && <DeleteCartModal
                                    deletingCart={deletingCart}
                                    setDeletingCart={setDeletingCart}
                                ></DeleteCartModal>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default CartScreen;