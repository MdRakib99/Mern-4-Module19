import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <nav className='bg-[#266bf9] p-4 '>
      <div className='container mx-auto flex items-center justify-center'>
        <div className='flex items-center space-x-4'>
          <div className='group relative'>
            <NavLink to='/#' className='text-white group-hover:text-gray-300'>
              HOME
            </NavLink>
            <div className='hidden group-hover:block absolute bg-white py-2 px-4 space-y-1 '>
              <NavLink to='/#' className='text-black'>
                Home 1
              </NavLink>
              <NavLink to='/#' className='text-black'>
                Page 2
              </NavLink>
            </div>
          </div>
          <NavLink to='/#' className='text-white'>
            ABOUT
          </NavLink>
          <div className='group relative'>
            <NavLink to='/#' className='text-white group-hover:text-gray-300'>
              PAGES
            </NavLink>
            <div className='hidden group-hover:block absolute bg-white py-2 px-4 space-y-2'>
              <NavLink to='/#' className='text-black'>
                Page 1
              </NavLink>
              <NavLink to='/#' className='text-black'>
                Page 2
              </NavLink>
              <NavLink to='/#' className='text-black'>
                Page 3
              </NavLink>
              {/* Add more pages as needed */}
            </div>
          </div>
          <div className='group relative'>
            <NavLink to='#' className='text-white group-hover:text-gray-300'>
              SHOP
            </NavLink>
            <div className='hidden group-hover:block absolute bg-white py-2 px-4 space-y-2'>
              <NavLink to='/#' className='text-black'>
                Shop 1
              </NavLink>
              <NavLink to='/#' className='text-black'>
                Shop 2
              </NavLink>
              {/* Add more shops as needed */}
            </div>
          </div>
          <div className='group relative'>
            <NavLink to='#' className='text-white group-hover:text-gray-300'>
              BLOG
            </NavLink>
            <div className='hidden group-hover:block absolute bg-white py-2 px-4 space-y-2'>
              <NavLink to='/#' className='text-black'>
                Blog Grid
              </NavLink>
              <NavLink to='/#' className='text-black'>
                Blog List
              </NavLink>
              {/* Add more blog options as needed */}
            </div>
          </div>
          <NavLink to='/#' className='text-white'>
            CONTACT
          </NavLink>
        </div>
        {/* Add responsive button for small screens */}
        <div className='lg:hidden'>
          {/* Add your responsive navigation button here */}
        </div>
      </div>
    </nav>
  );
};

export default Layout;

/*
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        <li>
          <a>Home</a>
          <ul className="p-2">
                     <li>
            <NavLink to={"/"}>Home1</NavLink>
          </li>
                      <li>
            <NavLink to={"/"}>Home2</NavLink>
          </li>
          </ul>
        </li>
            <li>
<li><a>About</a></li>
        </li>
              <li>
          <a>Pages</a>
          <ul className="p-2">
          <li>
            <NavLink to={"#"}>CartPage</NavLink>
          </li>
                      <li>
            <NavLink to={"#"}>Checkout Page</NavLink>
        </li>
              <li>
          <a>SHOP</a>
          <ul className="p-2">
            <li><a>Shop 1</a></li>
            <li><a>Shop 2</a></li>
          </ul>
        </li>
              <li>
          <a>Blog</a>
          <ul className="p-2">
            <li><a>Blog Grid</a></li>
            <li><a>Blog List</a></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>


"/team, /service, /project, /testimonial"


    <div className='flex justify-between  '>
      <div className='font-bold'>
        <span className='text-[#000000]'>Design</span>{" "}
        <span className='text-[#F55F1D]'>AGENCY</span>
      </div>
      <div>
        <ul className='flex gap-5 font-semibold'>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/team"}>Team</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/project"}>Project</NavLink>
          </li>
          <li>
            <NavLink to={"/testimonial"}>Testimonials</NavLink>
          </li>

          <li>
            <NavLink to={"/login"}>
              {" "}
              <button className='border border-green-500 rounded-md px-4 py-1  text-green-500 hover:bg-green-500 hover:text-white focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-800 '>
                Login
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>
              <button className='border border-green-500 rounded-md px-4 py-1  text-white bg-green-500 hover:text-white focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-800 '>
                Register
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
*/
