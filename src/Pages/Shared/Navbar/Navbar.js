
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

import Marquee from "react-fast-marquee";
import auth from './../../../firebase.init';
import useAdmin from './../../../Hooks/useAdmin';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    console.log("DASHBOARD", admin)

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItems = <>
        <li tabindex="0" className='p-0 h-1/4 mx-1.5 hover:bg[#81B441]'>
            <Link to='/home'>
                Home

            </Link>
            {/* <ul className="p-1 bg-base-100 z-50	">
                <li><Link to='/'>Summary</Link></li>
                <li><Link to='/'>Review</Link></li>
                <li><Link to='/allTool'>Tools</Link></li>
                <li><Link to='/'>Footer</Link></li>
            </ul> */}
        </li>
        <li className='p-0 h-1/4 mx-1.5'><Link to='/products'>Products</Link></li>
        <li className='p-0 h-1/4 mx-1.5'><Link to='/blog'>Blog</Link></li>
        <li className='p-0 h-1/4 mx-1.5'><Link to='/aboutUs'>About Us</Link></li>
        <li className='p-0 h-1/4 mx-1.5 list-none cart-icon'><Link to='/cart' className='cart-icon'><i class="uil uil-shopping-bag text-2xl cart-icon"></i></Link></li>

        <>



            {
                admin && <li className='p-0 h-1/4'><Link to='/dashboard'>Dashboard</Link></li>

            }
            {/* <li className='p-0 h-1/4'>{user ?
          
                <div className='p-0 h-1/4'>
                    <button onClick={logout} className="btn btn-ghost ">Sign Out</button>
                </div>
                {
                    (user.photoURL) ? <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={user.photoURL} alt='' />

                        </div>
                    </div>
                        :
                        <p className='bg-[#81B441] text-white font-bold'>{user.displayName}</p>
                }
            </></li>
            : */


                <>
                    {
                        user ?
                            <>
                                <div className='p-0 h-1/4'>
                                    <button onClick={logout} className="btn btn-ghost ">Sign Out</button>
                                </div>
                                <p className='badge badge-lg badge-primary font-semibold'>{user.displayName}</p>

                                {/* <li>{
                                    user ?
                                        <span>
                                            <button onClick={logout} className="btn btn-ghost">Log Out
                                            </button>
                                            <p className='badge badge-lg badge-primary font-semibold'>{user.displayName}</p>
                                        </span>

                                        :
                                        <Link to='/login'>Login</Link>
                                }</li> */}
                            </>

                            :

                            <div className='flex justify-center items-center'>

                                <Link to='/login' className='p-0 h-1/4 '><button className="btn btn-ghost hover:bg-primary">Login</button> </Link>
                                <>/</>
                                <Link to='/signup' className='p-0 h-1/4 '><button className="btn btn-ghost hover:bg-primary">Signup</button></Link>

                            </div>

                    }
                </>




            }
        </>
    </>
    return (
        <>

            <div className=' bg-[#224229]'>
                <Marquee pauseOnHover='true' gradient={false} >

                    <div className='  py-3 '>
                        <p className='text-white  text-xl'>
                            Free standard delivery on orders over $100
                        </p>
                    </div>

                </Marquee>

            </div>



            <div className="navbar bg-[#a0d2a185] bg-[#ecf6ecd9] bg-[#ecf6ec77] backdrop-blur-[20px] sticky top-0 z-50 flex justify-center items-center py-4 shadow-lg" >

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className=" lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                            <i class="uil uil-list-ul text-2xl"></i>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-white">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/fnB14zy/logo-removebg-preview-1.png" alt="" className="" />
                        {/* <span className='text-4xl font-semibold logo-font'>Little Leaf</span> */}
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 flex items-center justify-center navbar-font">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end lg:hidden">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </label>
                </div>
            </div>

        </>
    );
};

export default Navbar;