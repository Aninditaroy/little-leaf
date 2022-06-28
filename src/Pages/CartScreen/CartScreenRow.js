import React from 'react';

const CartScreenRow = ({ cart, setDeletingCart }) => {
    return (
        <tr>
            <td class="pl-5 py-5 border-b border-gray-200 bg-white text-sm">
                <img
                    class="w-20 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full"
                    src={cart.img} alt={cart.imgAlt}
                />
            </td>
            <td class="pl-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap text-md">
                    {cart.name}
                </p>
            </td>
            <td class="pl-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">${cart.price}</p>
            </td>
            <td class="pl-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{cart.quantity}</p>
            </td>
            <td class="pl-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                    <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Paid</span>
                </span>
            </td>
            {/* <td class="px-5 py-5 border-b border-gray-200  text-sm text-right">
                                                <button type="button" className="text-white  bg-red-600 p-5 rounded-full">
                                                    <i class="uil uil-trash-alt text-2xl "></i>
                                                </button>
                                            </td> */}
            <td className="pl-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                    <button className=''><span alt="" className="" />
                        <label onClick={() => setDeletingCart(cart)}
                            for="delete-confirm-modal" className="btn btn-xs btn-error bg-transparent hover:bg-transparent border-0">
                            <i class="uil uil-trash-alt text-2xl text-red-500 font-bold "></i>
                        </label>

                    </button>
                </span>
            </td>
        </tr>
    );
};

export default CartScreenRow;