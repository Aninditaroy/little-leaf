import React from 'react';

import { Link, Outlet, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';


import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from './../../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        <Loading></Loading>
    }
    // console.log('from dashboard user', user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                {/* <h2 className='text-2xl font-bold text-purple-500'>Welcome to your dashboard</h2> */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-0 overflow-y-auto w-48 bg-base-100 text-base-content   shadow-xl bg-slate-100 m-0 lg:m-8">
                    {/* <!-- Sidebar content here --> */}
                    <li className='my-2'><Link to='/dashboard'><i class="uil uil-users-alt text-lg"></i>All Users</Link></li>
                    {/* {
                        (user && !admin) && <>
                            <li><Link to='/dashboard/orders'>My Orders</Link></li>
                            <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                        </>

                    } */}


                    {
                        admin && <>
                            <li className='my-2'><NavLink to='/dashboard/addProducts'><i class="uil uil-plus-square text-lg"></i>Add Products</NavLink></li>
                            <li className='my-2'><NavLink to='/dashboard/manageProducts'><i class="uil uil-file-edit-alt text-lg"></i>Manage Products</NavLink></li>
                            <li className='my-2'><NavLink to='/dashboard/manageOrders'><i class="uil uil-file-check text-lg"></i>Manage Orders</NavLink></li>
                            {/* <li><Link to='/dashboard/addTool'>Add Tools</Link></li>
                            <li><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/manageTool'>Manage Tools</Link></li> */}
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;