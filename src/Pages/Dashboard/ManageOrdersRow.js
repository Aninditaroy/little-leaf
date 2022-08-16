import React from 'react';
import { toast } from 'react-toastify';

const ManageOrdersRow = ({ singleOrder, refetch, page }) => {
    const { userName, userEmail, transectionId, address, city, country, zipcode, total, _id, orderDate, orderTime } = singleOrder;

    const handleShipping = () => {
        fetch(`https://rocky-anchorage-54101.herokuapp.com/manageorder/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())

            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully shipped`)
                }

            })
    }

    return (
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

            {/* <td class="px-4 py-3 text-ms font-semibold border">{address}{city}</td> */}
            <td class="px-4 py-3   border text-black">
                <p class="text-sm text-black">{address}</p>
                <p class="text-xs "> <span className=''>{city}</span> <span>{zipcode}</span></p>
            </td>

            <td class="px-4 py-3 text-sm border"><span className=' font-bold text-md pr-1'>&#2547;</span>{total}</td>
            <td class="px-4 py-3 text-xs border">
                {
                    singleOrder?.pendingChange ?
                        <button>
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Shipped </span>
                        </button>
                        :

                        <button onClick={handleShipping}>
                            <span class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-sm"> Pending </span>
                        </button>

                }

            </td>
            <td class="px-4 py-3   border text-black">
                <p class="text-sm text-black">{orderDate}</p>
                <p class="text-xs "> {orderTime}</p>
            </td>
            <td class="px-4 py-3 text-sm border">{transectionId}</td>
        </tr>
    );
};

export default ManageOrdersRow;