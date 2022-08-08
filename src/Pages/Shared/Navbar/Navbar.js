import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Marquee from "react-fast-marquee";
import auth from './../../../firebase.init';
import useAdmin from './../../../Hooks/useAdmin';
import { signOut } from 'firebase/auth';
import useCart from './../../../Hooks/useCart';
import Loading from '../Loading/Loading';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [cartProducts] = useCart();
    // console.log("USER email from navbar", user?.emailVerified)
    // console.log("USER from navbar", user)
    const [admin] = useAdmin(user)
    // console.log(user)
    // console.log(user?.displayName)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    if (loading) {
        return <Loading></Loading>
    }

    const menuItems = <>
        <li tabindex="0" className='p-0 h-1/4 mx-1.5 hover:bg[#81B441]'>

            <NavLink to='/home'>
                Home

            </NavLink>

        </li>
        <li className='p-0 h-1/4 mx-1.5'><NavLink to='/products'>Products</NavLink></li>
        <li className='p-0 h-1/4 mx-1.5'><NavLink to='/blogs'>Blog</NavLink></li>
        <li className='p-0 h-1/4 mx-1.5'><NavLink to='/aboutUs'>About Us</NavLink></li>
        <div class="indicator ml-3 mt-2 lg:mr-2">
            <span class="indicator-item badge  bg-[#224229] mr-1.5 text-white rounded-full">{cartProducts?.length}</span>
            <li className='p-0 h-1/4 mx-1.5 list-none cart-icon'><NavLink to='/cart' className='cart-icon p-0'><i class="uil uil-shopping-bag text-2xl cart-icon"></i></NavLink>
            </li>
        </div>

        <>



            {
                ((user?.emailVerified) && admin) && <>
                    <li className='p-0 h-1/4'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li className='p-0 h-1/4 hidden'><NavLink to='/myorders'>My Orders</NavLink></li>
                </>
            }
            {
                ((user?.emailVerified) && !admin) && <li className='p-0 h-1/4'><NavLink to='/myorders'>My Orders</NavLink></li>
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
                        (user?.emailVerified) ?
                            <>
                                <div className='p-0 h-1/4'>
                                    <button onClick={logout} className="btn btn-ghost ">Sign Out</button>
                                </div>
                                <p className='badge badge-lg badge-primary font-semibold'>{user?.displayName}</p>

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

                                <NavLink to='/login' className='p-0 h-1/4 '><button className="btn btn-ghost hover:bg-primary">Login</button> </NavLink>
                                <>/</>
                                <NavLink to='/signup' className='p-0 h-1/4 '><button className="btn btn-ghost hover:bg-primary">Signup</button></NavLink>

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



            <div className="navbar bg-[#a0d2a185] bg-[#ecf6ecd9] bg-[#ecf6ec77] backdrop-blur-[20px] sticky top-0 z-50 flex justify-center items-center py-4 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className=" lg:hidden">
                            <i class="uil uil-list-ul text-2xl"></i>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-white">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/1JRs2mf/Beige-Simple-Aesthetic-Cactus-Logo-removebg-preview.png" alt="" className="" />
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