import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

const MyOrdersRow = ({ order, refetch }) => {
    const { userName, userEmail, transectionId, address, city, country, zipcode, total, _id, orderDate, orderTime } = order;
    const [orderItems, setOrderItems] = useState([]);
    fetch(`https://rocky-anchorage-54101.herokuapp.com/myorderitems/${transectionId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => setOrderItems(data))

    return (
        <>


            <tr class="text-gray-700">
                <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="w-10 h-10 mr-3">
                            <p class="w-full h-full rounded-full bg-[#EFF4EF] flex justify-center items-center">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path></svg>
                            </p>
                        </div>
                        <div>
                            <p class="font-semibold text-black">{userName}</p>
                            <p class="text-xs text-gray-600">{userEmail}</p>
                        </div>
                    </div>
                </td>


                <td class="px-4 py-3   border text-black">
                    <p class="text-sm text-black">{address}</p>
                    <p class="text-xs "> <span className=''>{city}</span> <span>{zipcode}</span></p>
                </td>


                <>
                    <td class="px-4 py-3 border">
                        {
                            orderItems.map(orderItem =>
                                <div orderItem={orderItem} key={orderItem._id} class="flex items-center text-sm">
                                    <div class="relative w-12 h-12 mr-3 rounded-full md:block">
                                        <img class="object-cover w-full h-full rounded-full" src={orderItem.img} alt="" loading="lazy" />
                                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <td class="px-2 py-3 text-md">{orderItem?.name}</td>
                                    </div>
                                </div>
                            )
                        }
                    </td>
                </>


                <td class="px-4 py-3 text-sm border">${total}</td>


                <td class="px-4 py-3   border text-black">
                    <p class="text-sm text-black">{orderDate}</p>
                    <p class="text-xs "> {orderTime}</p>
                </td>
                <td class="px-4 py-3 text-sm border">{transectionId}</td>
            </tr>



        </>
    );
};

export default MyOrdersRow;