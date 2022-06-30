import React from 'react';

import { Link, Outlet, NavLink } from 'react-router-dom';
import useAdmin from './../../Hooks/useAdmin';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        <Loading></Loading>
    }
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
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content   shadow-xl bg-slate-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>All Users</Link></li>
                    {/* {
                        (user && !admin) && <>
                            <li><Link to='/dashboard/orders'>My Orders</Link></li>
                            <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                        </>

                    } */}


                    {
                        admin && <>
                            <li><NavLink to='/dashboard/users'>All Users</NavLink></li>
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