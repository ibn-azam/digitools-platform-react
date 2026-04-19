import { ShoppingCart } from 'lucide-react';
import React from 'react';


const Navbar = ({cartCount}) => {
    return (
        <div>
            <div className="flex items-center py-3 px-10 bg-base-100 shadow-sm ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Fatures</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  font-medium">
                        <li><a>Products</a></li>
                            <li><a>Fatures</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-1'>
                        <ShoppingCart><p>{cartCount}</p></ShoppingCart>
                        <button className='btn btn-ghost rounded-full'>Login</button>
                        <button className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-full'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;