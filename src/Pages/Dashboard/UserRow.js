import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully made an admin");
                }
            })
    }
    return (
        <tr className='bg-slate-500'>
            <th>{index + 1}</th>
            <td>{email}</td>
            {/* {
                <td>{(role === 'admin') ? <p className="badge badge-lg  bg-primary hover:bg-secondary">Admin</p>
                    :
                    <p className="badge badge-lg bg-[#224229] hover:bg-green-400 text-white">User</p>}</td>
            } */}
            <td>
                {
                    (role !== 'admin') ? <button
                        onClick={makeAdmin}
                        className=" sm:w-auto px-4 py-2   text-sm     font-medium   focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-100 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-[#cac5ff]  bg-[#EDEBFE] hover:bg-[#dbd8f5] text-[#5521B5]
                    ] my-auto"> <i class="uil uil-user-plus mr-1 text-xl"></i> Make Admin</button>
                        :
                        <button
                            className=" sm:w-auto px-4 py-2   text-sm     font-medium   focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-100 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-green-500 bg-green-200 hover:bg-green-500/50 text-green-900"><i class="uil uil-user-check mr-1 text-xl"></i>
                            Already Admin</button>

                }
            </td>
        </tr >

    );
};

export default UserRow;