import React from 'react';
import { toast } from 'react-toastify';

const ManageOrdersRow = ({ singleOrder, refetch }) => {
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
                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
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

            <td class="px-4 py-3 text-sm border">${total}</td>
            <td class="px-4 py-3 text-xs border">
                {
                    singleOrder?.pandingChange ?
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